import React from 'react'

export default class Project extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  _updateState = () => {
  }

  componentWillMount () {
    const {env, store, actions} = this.context
    if (!env.isBrowser()) {
      return
    }
    const {router} = store.getState()
    const projectSlug = router.get('params').get('project')
    store.dispatch(actions.projects.GET_PROJECT_BY_SLUG(projectSlug))
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
