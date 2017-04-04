import React from 'react'
import classnames from 'classnames'

import {Link} from 'react-router'

import FlipCard from './FlipCard'
const cls = elm => `ShowCase-${elm}`

export default class ShowCase extends React.Component {
  static propTypes = {
    projects: React.PropTypes.object.isRequired,
  }

  _getWork = ({imageUrl, slug, description, name}) => {
    const front = (
      <Link className={cls('link')} to={`projects/${slug}`}>
        <div className={cls('wrapper')}>
          <img className={cls('img')} src={imageUrl} />
        </div>
      </Link>
    )
    const back = (
      <div className={classnames(cls('wrapper'), cls('wrapper--back'))}>
        <div className={cls('title')}>{name}</div>
        <div className={cls('content')}>{description}</div>
      </div>
    )

    return (
      <FlipCard
        back={back}
        front={front}
        className={cls('work')}
        key={Math.random()}
      />
    )
  }

  _getContent = works => (
    <div className='ShowCase'>
      {works}
    </div>
  )

  render () {
    const works = this.props.projects.map(this._getWork)
    return this._getContent(works)
  }
}
