import _ from 'lodash'
import React from 'react'
import {withRouter, Link} from 'react-router'

import Loader from 'scripts/components/helpers/Loader'
import Palette from 'scripts/components/helpers/Palette'
import Drop from 'scripts/components/icons/Drop'

const cls = elem => `Project-${elem}`

class Project extends React.Component {
  static propTypes = {
    params: React.PropTypes.object,
  }

  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  _updateState = () => {
    const {project} = this.context.store.getState()
    this.setState({project})
  }

  componentWillMount () {
    const {env, store} = this.context
    if (!env.isBrowser()) {
      return
    }
    const {router} = store.getState()
    const projectSlug = router.get('params').get('project')
    this.fetchProject(projectSlug)
    this.unsubscribe = store.subscribe(this._updateState)
  }

  fetchProject (slug) {
    const {store, actions} = this.context
    store.dispatch(actions.project.GET_PROJECT_BY_SLUG(slug))
    store.dispatch(actions.project.GET_RELATED_PROJECTS(slug))
  }

  componentWillReceiveProps (nextProps) {
    const {project} = nextProps.params
    if (project !== this.props.params.project) {
      this.fetchProject(project)
    }
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  _getMoreProjects () {
    const {project: {related}} = this.state
    return related.map((project, i) => {
      const href = `/projects/${project.get('slug')}`
      const src = project.get('imageUrl')
      return (
        <Link className={cls('link')} to={href} key={i} >
          <div className={cls('more-img-wrapper')}>
            <img className={cls('more-img')} src={src} />
          </div>
        </Link>
      )
    })
  }

  _canRender () {
    const {project} = this.state
    return (
      !_.isNil(project) ||
      !_.isEmpty(project)
    )
  }

  render () {
    const {project} = this.state
    if (!this._canRender()) {
      return <Loader />
    }
    return (
      <div className='Project'>
        <div className={cls('img-wrapper')}>
          <img src={project.get('imageUrl')} className={cls('img')} />
        </div>
        <div className={cls('content')}>
          <div className={cls('title')}>
            {project.get('name')}
          </div>
          <div className={cls('description')}>
            {project.get('description')}
          </div>
          <div className={cls('palette')}>
            <Drop className={cls('palette-icon')} />
            <Palette palette={project.get('palette')} />
          </div>
          <div className={cls('more')}>
            <div className={cls('title')}>
              More like this
            </div>
            <div className={cls('more-content')}>
              {this._getMoreProjects()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Project)
