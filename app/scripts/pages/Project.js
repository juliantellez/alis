import _ from 'lodash'
import React from 'react'
import {Link} from 'react-router'

import Loader from 'scripts/components/helpers/Loader'
import Palette from 'scripts/components/helpers/Palette'
import Drop from 'scripts/components/icons/Drop'

const cls = elem => `Project-${elem}`

export default class Project extends React.Component {
  static contextTypes = {
    env: React.PropTypes.object,
    store: React.PropTypes.object,
    actions: React.PropTypes.object,
  }

  state = {}

  _updateState = () => {
    const {project} = this.context.store.getState()
    console.log('here!!')
    this.setState({project})
  }

  componentWillMount () {
    const {env, store, actions} = this.context
    if (!env.isBrowser()) {
      return
    }
    const {router} = store.getState()
    const projectSlug = router.get('params').get('project')
    store.dispatch(actions.project.GET_PROJECT_BY_SLUG(projectSlug))
    store.dispatch(actions.project.GET_RELATED_PROJECTS(projectSlug))
    this.unsubscribe = store.subscribe(this._updateState)
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
        <a className={cls('link')} href={href} key={i} target='_blank'>
          <div className={cls('more-img-wrapper')}>
            <img className={cls('more-img')} src={src} />
          </div>
        </a>
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
    console.log(this.context.store.getState().router.toJS())
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
