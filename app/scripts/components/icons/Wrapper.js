
/* eslint-disable max-len */
import React from 'react'
import ReactDOMServer from 'react-dom/server'

export default class SVG extends React.Component {
  render () {
    const svg = ReactDOMServer.renderToStaticMarkup(this.props.children)
    return <span className={this.props.className} dangerouslySetInnerHTML={{__html: svg}} />
  }
}
