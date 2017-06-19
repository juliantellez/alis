import React from 'react'
import classnames from 'classnames'
import {IndexLink, Link} from 'react-router'

const cls = elem => `Links-${elem}`

export default class Links extends React.Component {
  _getLink (to, name) {
    const props = {
      to,
      key: name,
      className: cls('link'),
      activeClassName: cls('link--active'),
    }
    const HOME = 'Home'
    const elem = name === HOME ? IndexLink : Link
    return React.createElement(elem, props, [name])
  }

  _getLinks () {
    return [
      this._getLink('/works', 'Projects'), // TODO update link
      this._getLink('/about', 'About'),
      this._getLink('/contact', 'Contact'),
      // this._getLink('/shop', 'Shop'), // TODO
    ]
  }

  render () {
    const className = classnames('Links', this.props.className)
    return (
      <div className={className}>
        {this._getLinks()}
      </div>
    )
  }
}
