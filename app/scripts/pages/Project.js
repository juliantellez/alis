import _ from 'lodash'
import React from 'react'

import {Actions} from 'scripts/client/store/main'

export default class Project extends React.Component {
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
    const {router} = store.getState()
    console.log(store.getState())
    Actions.getProjects(6)
    this.unsubscribe = store.subscribe(this._updateState)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <div>
        Project
      </div>
    )
  }
}
