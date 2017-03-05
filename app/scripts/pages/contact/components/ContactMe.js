import React from 'react'
import Formsy from 'formsy-react'

const cls = elem => `ContactMe-${elem}`

export default class ContactMe extends React.Component {
  render () {
    return (
      <div className='ContactMe' >
        <div className={cls('title')} >Contac Me</div>
      </div>
    )
  }
}