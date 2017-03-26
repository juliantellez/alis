import React from 'react'

import ShowCase from './works/ShowCase'

const cls = elem => `Works-${elem}`

export default class Works extends React.Component {
  works = [
    {
      src: '/static/images/pages/works/drillsGuru.jpg',
      href: '/about',
      description: 'Working on this project fom the scratch ,can be used on any device, using customise logo , icons , chalenging part was to match content and idea in one .',
    },
    {
      src: '/static/images/pages/works/newsApp.jpg',
      href: '/about',
      description: 'Creating UX/UI news app for ISO and android, using inforamtion from UX research, sketching working map , designing styles and icons.',
    },
    {
      src: '/static/images/pages/works/analytics.jpg',
      href: '/about',
      description: 'This UI graph designed from skratch for mobile and android app, using diferent shapes and techniques in Sketch designer.',
    },
    {
      src: '/static/images/pages/works/calendar.jpg',
      href: '/about',
      description: 'Designing ISO and android calendar screen  for news app , using customised icons and  content based on research and work in Sketch designer.',
    },
    {
      src: '/static/images/pages/works/cindy.jpg',
      href: '/about',
      description: 'Creating an SVG portrait ,this work includes personalised design an experemetn whit shadows and huge color pallet, to make portrait look more realistic .',
    },
    {
      src: '/static/images/pages/works/logo.jpg',
      href: '/about',
      description: 'This custom logo designed for learning website, using a content and name of the website. ',
    },
  ]

  render () {
    return (
      <div className='Works'>
        <ShowCase works={this.works} />
      </div>
    )
  }
}
