/* eslint-disable max-len */
import I from 'immutable'

const data = [
  {
    name: 'Drills Guru Logo Design',
    slug: 'drills-guru-logo',
    imageUrl: '/aliway/images/pages/works/logo.jpg',
    palette: ['#FE4800', '#FFFFFF'],
    related: [],
    description: `Drills Guru is an educational website which promotes 
      the acquisition of knowledge through repetitive and selective practice.\n
      This logo explores the concept of technology and mentoring and their 
      association with the learning process.`,
  },
  {
    name: 'Drills Guru Website',
    slug: 'drills-guru-webiste',
    imageUrl: '/aliway/images/pages/works/drillsGuru.jpg',
    description: 'Working on this project fom the scratch, can be used on any device, using customise logo, icons, chalenging part was to match content and idea in one .',
    palette: ['#FE4800', '#FFFFFF'],
    related: ['news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph'],
  },
  {
    name: 'Svg Portrait',
    slug: 'svg-portrait',
    imageUrl: '/aliway/images/pages/works/cindy.jpg',
    description: 'Creating an SVG portrait ,this work includes personalised design an experemetn whit shadows and huge color pallet, to make portrait look more realistic .',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph'],
  },
  {
    name: 'News App',
    slug: 'news-app',
    imageUrl: '/aliway/images/pages/works/newsApp.jpg',
    description: 'Creating UX/UI news app for ISO and android, using inforamtion from UX research, sketching working map , designing styles and icons.',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph'],
  },
  {
    name: 'Analytics graphics',
    slug: 'analytics-graph',
    imageUrl: '/aliway/images/pages/works/analytics.jpg',
    description: 'This UI graph designed from skratch for mobile and android app, using diferent shapes and techniques in Sketch designer.',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph'],
  },
  {
    name: 'Calendar',
    slug: 'calendar',
    imageUrl: '/aliway/images/pages/works/calendar.jpg',
    description: 'Designing ISO and android calendar screen  for news app , using customised icons and  content based on research and work in Sketch designer.',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph', 'news-app', 'calendar', 'analytics-graph'],
  },
]

export default I.fromJS(data)
