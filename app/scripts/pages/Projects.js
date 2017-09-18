import _ from 'lodash'
import React from 'react'
import {Link} from 'react-router'

import Loader from 'scripts/components/helpers/Loader'

const cls = elem => elem ? `Projects-${elem}` : 'Projects'

export default class Projects extends React.Component {
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
      store.dispatch(actions.projects.GET_PROJECTS(20))
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

  _getProject = ({imageUrl, slug, description, name}) => {
    return (
      <Link key={slug} className={cls('link')} to={`projects/${slug}`}>
        <img className={cls('img')} src={imageUrl} />
      </Link>
    )
  }

  render () {
    if (!this._canRender()) {
      return <Loader />
    }
    const projects = this.state.projects.map(this._getProject)
    return (
      <div className={cls()}>
        <div className={cls('content')}>
          {projects}
        </div>
      </div>
    )
  }
}
