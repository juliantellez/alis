import React from 'react'

import Header from 'scripts/components/helpers/Header'
import Footer from 'scripts/components/helpers/Footer'

export default class Layout extends React.Component {
  render () {
    return (
      <div className='Layout'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
