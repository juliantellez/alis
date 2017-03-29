import _ from 'lodash'
import React from 'react'

import ShowCase from './works/ShowCase'
import {Actions} from 'scripts/client/store/main'
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

  render () {
    const {works} = this.state
    if (_.isNil(works)) {
      return null
    }

    return (
      <div className='Works'>
        <ShowCase works={works} />
      </div>
    )
  }
}
