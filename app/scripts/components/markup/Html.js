/* eslint-disable max-len */
import React from 'react'
// import envUtils from 'src/utils/env'

export default class Html extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    store: React.PropTypes.object,
  }

  _getGoogleAnalytics () {
    // if (envUtils.getNode() !== 'production') {
    //   return null
    // }
    return (
      <script dangerouslySetInnerHTML={{__html: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-72315706-2', 'auto');
        ga('send', 'pageview');
      `}}/>
    )
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
          <script dangerouslySetInnerHTML={{__html: `window.STATE = ${state}`}} />
          {this._getGoogleAnalytics()}
        </body>
      </html>
    )
  }
}
