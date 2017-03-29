import React from 'react'
import classnames from 'classnames'

import {Link} from 'react-router'

import FlipCard from './FlipCard'
const cls = elm => `ShowCase-${elm}`

export default class ShowCase extends React.Component {
  static propTypes = {
    works: React.PropTypes.array.isRequired,
  }

  _getWork = ({image, url, description}) => {
    const front = (
      <Link className={cls('link')} to={url}>
        <div className={cls('wrapper')}>
          <img className={cls('img')} src={image} />
        </div>
      </Link>
    )
    const back = (
      <div className={classnames(cls('wrapper'), cls('wrapper--back'))}>
        {description}
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
    const works = this.props.works.map(this._getWork)
    return this._getContent(works)
  }
}
