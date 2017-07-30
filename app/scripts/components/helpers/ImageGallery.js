import _ from 'lodash'
import React from 'react'
import {Link} from 'react-router'
import Lightbox from 'react-images'

export default class ImageGallery extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  _updateState = () => {
    const {store} = this.context
    const {projects} = store.getState()
    this.setState({projects: projects.all, isOpen: true})
  }

  componentWillMount () {
    const {store, actions} = this.context
    const {projects} = store.getState()
    if (projects && projects.get('all').isEmpty()) {
      store.dispatch(actions.projects.GET_PROJECTS(20))
    }
    this._updateState()
    this.unsubscribe = store.subscribe(this._updateState)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  _getImageSet () {
    return this.state.projects.map(({imageUrl, name}) => ({
      src: imageUrl,
      caption: name,
    })).toJS()
  }

  _canRender () {
    const {projects} = this.state
    return (
      !_.isNil(projects) ||
      !_.isEmpty(projects)
    )
  }

  _onClickImage = img => {
    console.log(img)
  }

  render () {
    if (!this._canRender()) {
      return null
    }
    return (
      <div className='ImageGallery'>
        <Lightbox
          images={this._getImageSet()}
          onClickImage={this._onClickImage}
          onClickNext={this._onClickImage}
          onClickPrev={this._onClickImage}
          isOpen={this.state.isOpen}
          onClose={() => this.setState({isOpen: false})}
          />
      </div>
    )
  }
}
