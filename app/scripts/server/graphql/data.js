/* eslint-disable max-len */
import I from 'immutable'

const data = [
  {
    name: 'Drills Guru Logo Design',
    slug: 'drills-guru-logo',
    imageUrl: '/aliway/images/projects/drills-guru-logo.png',
    palette: ['#FE4800', '#FFFFFF'],
    related: ['drills-guru-landing-page', 'drills-guru-profile-page', 'drills-guru-payment-form'],
    description: `Drills Guru is an educational website which promotes 
      the acquisition of knowledge through repetitive and selective practice.
      This logo explores the concept of technology and mentoring and their 
      association with the learning process.`,
  },
  {
    name: 'Drills Guru Landing Page',
    slug: 'drills-guru-landing-page',
    imageUrl: '/aliway/images/projects/drills-guru-landing-page.png',
    palette: ['#FE4600', '#5B5B5B', '#FFFFFF', '#0456A1'],
    related: ['drills-guru-logo', 'drills-guru-profile-page', 'drills-guru-payment-form'],
    description: `This page aims to create a memorable experience by
    guiding the user towards a desired action ("find and click"). Visitors are drawned
    further into the site by suggesting proposed actions but supporting them
    with a search functionality. This page also provides quick access to basic navigation needs
    such as quick checkout, sign-in and sign-up.`,
  },
  {
    name: 'Drills Guru\'s Profile Page',
    slug: 'drills-guru-profile-page',
    imageUrl: '/aliway/images/projects/drills-guru-profile-page.png',
    palette: ['#FE4600', '#5B5B5B', '#FFFFFF', '#0456A1'],
    related: ['drills-guru-logo', 'drills-guru-landing-page', 'drills-guru-payment-form'],
    description: 'This case study displays this is page is for the buyer if he wishes to purchase or know more about a ',
  },
  {
    name: 'Drills Guru Payment Form',
    slug: 'drills-guru-payment-form',
    imageUrl: '/aliway/images/projects/drills-guru-payment-form.png',
    description: '//TODO',
    palette: ['#FE4600', '#5B5B5B', '#FFFFFF', '#0456A1'],
    related: ['drills-guru-logo', 'drills-guru-landing-page', 'drills-guru-profile-page'],
  },
  {
    name: 'Svg Portrait',
    slug: 'svg-portrait',
    imageUrl: '/aliway/images/projects/cindy.png',
    description: 'Creating an SVG portrait ,this work includes personalised design an experemetn whit shadows and huge color pallet, to make portrait look more realistic .',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },
  {
    name: 'News App',
    slug: 'news-app',
    imageUrl: '/aliway/images/projects/news-app.png',
    description: 'Creating UX/UI news app for ISO and android, using inforamtion from UX research, sketching working map , designing styles and icons.',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },
  {
    name: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
    imageUrl: '/aliway/images/projects/analytics-ui.png',
    palette: ['#C571F4', '#D67EED', '#F272D5', '#FBFBFB'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
    description: (
      `An exploration of light themes for mobile apps, it has been designed with 
      a monochromatic scheme which scales down from purple-pink to white.
      The contrasting tones composed an interactive theme that attracts attention, creates focus
      and has clear legibility.
      `
    ),
  },
  {
    name: 'Calendar',
    slug: 'calendar',
    imageUrl: '/aliway/images/projects/calendar.png',
    description: 'Designing ISO and android calendar screen  for news app , using customised icons and  content based on research and work in Sketch designer.',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },

  //

  {
    name: 'Articles app',
    slug: 'article-screen',
    imageUrl: '/aliway/images/projects/article-screen.png',
    description: 'TODO//',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },

  {
    name: 'Birki',
    slug: 'birki',
    imageUrl: '/aliway/images/projects/birki-website.png',
    description: '//TODO',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },
  {
    name: 'Butterfly Sketch',
    slug: 'butterfly-sketch',
    imageUrl: '/aliway/images/projects/butter-sketch.png',
    description: 'TODO//',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },
  {
    name: 'Free Will Community',
    slug: 'free-will-communitiy-website',
    imageUrl: '/aliway/images/projects/free-will-communitiy-website.png',
    description: '//TODO',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },
  {
    name: 'Latinos in London',
    slug: 'latinos-in-london',
    imageUrl: '/aliway/images/projects/latinos-in-london.png',
    description: '//TODO',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },
  {
    name: 'Santa Murs',
    slug: 'santa-murs-website',
    imageUrl: '/aliway/images/projects/santa-murs-webiste.png',
    description: '//TODO',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },
]

export default I.fromJS(data)
