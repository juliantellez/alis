import React from 'react'
import moment from 'moment'
import {Link} from 'react-router'

export default class Footer extends React.Component {
  render () {
    const year = moment(new Date()).format('YYYY')
    return (
      <div className='Footer'>
        <Link className='Footer-link' to='/'>
          www.aliway.co {year}
        </Link>
      </div>
    )
  }
}
