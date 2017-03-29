import _ from 'lodash'
import React from 'react'

import Loader from 'scripts/components/helpers/Loader'
import {Actions} from 'scripts/client/store/main'

import ShowCase from './works/ShowCase'

const cls = elem => `Works-${elem}`

export default class Works extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
  }

  state = {}

  _updateState = () => {
    const {store} = this.context
    const {projects} = store.getState()
    if (!_.isNil(projects.data)) {
      this.setState({
        works: projects.data.getWorks,
      })
    }
  }

  componentWillMount () {
    const {env, store} = this.context
    if (!env.isBrowser()) {
      return
    }
    Actions.getProjects(6)
    this.unsubscribe = store.subscribe(this._updateState)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  _canRender () {
    const {works} = this.state
    return (
      !_.isNil(works)
    )
  }
  render () {
    const {works} = this.state
    if (!this._canRender()) {
      return <Loader />
    }
    return (
      <div className='Works'>
        <ShowCase works={works} />
      </div>
    )
  }
}
