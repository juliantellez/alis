/* eslint-disable max-len */
import React from 'react'

export default class Html extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    store: React.PropTypes.object,
  }
  render () {
    const state = JSON.stringify(this.props.store.getState())
    return (
      <html>
        <head>
        <title>{this.props.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1' />
        <link rel='icon' type='image/x-icon' href='/aliway/images/fav.ico' />
        <link rel='stylesheet' type='text/css' href='/aliway/styles/main.css' />
        </head>
        <body>
          <div id='main' dangerouslySetInnerHTML={{__html: this.props.children}} />
          <script src='/aliway/bundles/client.js'></script>
          <script dangerouslySetInnerHTML={{__html: `window.STATE = ${state}`}}/>
        </body>
      </html>
    )
  }
}
