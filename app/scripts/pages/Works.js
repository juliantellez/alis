import _ from 'lodash'
import React from 'react'

import Loader from 'scripts/components/helpers/Loader'

import ShowCase from './works/ShowCase'

export default class Works extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  _updateState = () => {
    const {store} = this.context
    const {projects} = store.getState()
    this.setState({projects: projects.all})
  }

  componentWillMount () {
    const {store, actions} = this.context
    const {projects} = store.getState()
    if (projects.get('all').isEmpty()) {
      store.dispatch(actions.projects.GET_PROJECTS(6))
    }
    this.unsubscribe = store.subscribe(this._updateState)
  }

  componentDidMount () {
    this._updateState()
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  _canRender () {
    const {projects} = this.state
    return (
      !_.isNil(projects) ||
      !_.isEmpty(projects)
    )
  }

  render () {
    const {projects} = this.state
    if (!this._canRender()) {
      return <Loader />
    }
    return (
      <div className='Works'>
        <ShowCase projects={projects} />
      </div>
    )
  }
}
