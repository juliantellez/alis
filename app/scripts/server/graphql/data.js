/* eslint-disable max-len */
import I from 'immutable'

const data = [
  {
    name: 'Drills Guru Logo Design',
    slug: 'drills-guru-logo',
    imageUrl: '/aliway/images/projects/drills-guru-logo.png',
    palette: ['#FE4800', '#FFFFFF'],
    related: ['drills-guru-landing-page', 'drills-guru-profile-page', 'drills-guru-payment-modal'],
    description: (
      `Drills Guru is an educational website which promotes 
      the acquisition of knowledge through repetitive and selective practice.
      This logo explores the concept of technology and mentoring and their 
      association with the learning process.`
    ),
  },
  {
    name: 'Drills Guru Landing Page',
    slug: 'drills-guru-landing-page',
    imageUrl: '/aliway/images/projects/drills-guru-landing-page.png',
    palette: ['#FE4600', '#5B5B5B', '#FFFFFF', '#0456A1'],
    related: ['drills-guru-logo', 'drills-guru-profile-page', 'drills-guru-payment-modal'],
    description: (
      `This page aims to create a memorable experience by
      guiding the user towards the desired action ("find and click").
      Visitors are drawn further into the site by suggesting proposed actions
      but supporting them with a search functionality.
      This page also provides quick access to basic navigation needs
      such as quick checkout, sign-in and sign-up.`
    ),
  },
  {
    name: 'Drills Guru\'s Profile Page',
    slug: 'drills-guru-profile-page',
    imageUrl: '/aliway/images/projects/drills-guru-profile-page.png',
    palette: ['#FE4600', '#5B5B5B', '#FFFFFF', '#0456A1'],
    related: ['drills-guru-logo', 'drills-guru-landing-page', 'drills-guru-payment-modal'],
    description: (
      `The idea behind this design is to build customer trust.
      Users are introduced to a 'Guru' (the seller) via a video and a short description.
      In order to establish good communication between seller and buyer, a series of suggested
      videos are also made available to the user; these videos are related to a recent search
      and organised by popularity.`
    ),
  },
  {
    name: 'Drills Guru Payment Modal',
    slug: 'drills-guru-payment-modal',
    imageUrl: '/aliway/images/projects/drills-guru-payment-modal.png',
    palette: ['#FE4600', '#5B5B5B', '#FFFFFF', '#0456A1'],
    related: ['drills-guru-logo', 'drills-guru-landing-page', 'drills-guru-profile-page'],
    description: (
      `The idea behind this page is to ease and simplify the user's
      payment experience. This modal window provides a simple but robust
      UI that serves as middle ground between the website and a third party
      payment's platform.`
    ),
  },
  {
    name: 'Svg Portrait',
    slug: 'svg-portrait',
    imageUrl: '/aliway/images/projects/cindy.png',
    related: ['butterfly-sketch'],
    palette: [
      '#E7E7E7', '#C8A6A4', '#93868E', '#36505C', '#010101', '#4B3D38',
      '#F7DEDB', '#C0F5FF', '#F3E5E2', '#EAD8CE', '#E4E4E4', '#C5AEA6',
      '#AI535A', '#A7BE7E', '#8E9662', '#866744', '#DA9A97', '#B43C4A',
      '#FF90AA', '#E45978', '#EA769D', '#F5A2BB', '#DD85A5', '#EC5A7C',
      '#52342A', '#8A4C39', '#A47A54', '#D59F80', '#B19C8B', '#826358',
    ],
    description: (
      `A geometric Vector Portrait.
      The goal of this experiment is to represent a face familiar to the eye
      using only straight lines. This work explores shadowing and colour
      tonality to recreate form, shape and space.
      The result is a more striking, yet pleasing and recognizable portrait.`
    ),
  },
  {
    name: 'Analytics Dashboard',
    slug: 'analytics-dashboard',
    imageUrl: '/aliway/images/projects/analytics-ui.png',
    palette: ['#C571F4', '#D67EED', '#F272D5', '#FBFBFB'],
    related: ['news-app', 'calendar', 'news-app', 'calendar', 'news-app', 'calendar'],
    description: (
      `An exploration of light themes for mobile apps. It has been designed with 
      a monochromatic scheme which scales down from purple-pink to white.
      The contrasting tones compose an interactive theme that attracts attention, creates focus
      and has clear legibility.
      `
    ),
  },
  {
    name: 'Birki Landing Page',
    slug: 'birki-landing-page',
    imageUrl: '/aliway/images/projects/birki-landing-page.png',
    palette: ['#920043', '#000000', '#FFFFFF'],
    related: ['santa-murs-landing-page', 'free-will-communitiy-email-marketing', 'drills-guru-landing-page'],
    description: (
      `The goal of this project was to target a seasonal audience and generate leads for a small bakery.
      it includes a simple form for the visitor to get into contact with birky, and further encourages
      leads generation by offering a limited time offer.`
    ),
  },
  {
    name: 'Sketch exploration',
    slug: 'butterfly-sketch',
    imageUrl: '/aliway/images/projects/butter-sketch.png',
    related: ['svg-portrait'],
    palette: ['#99CDAF', '#312C2C', '#AAAA72', '#070606', '#C28D8D', '#E2E480'],
    description: (
      `This piece came about as a discovery of a truly amazing piece of
      software called Sketch. It explores basic concepts such as shapes,
      curves, flips, shadows, colour tonality and symmetric mirroring.
      `
    ),
  },
  {
    name: 'Free Will Community Email Marketing',
    slug: 'free-will-communitiy-email-marketing',
    imageUrl: '/aliway/images/projects/free-will-communitiy-email-marketing.png',
    palette: ['#BCBCBC', '#E4E4E4', '#FFFFFF'],
    related: ['santa-murs-landing-page'],
    description: (
      `This case study aims to raise animal protection awareness via email
      campaigns, it has a clear message and its sole purpose is to invite
      users to join a community of like minded individuals.
      `
    ),
  },
  {
    name: 'Latinos in London Website',
    slug: 'latinos-in-london',
    imageUrl: '/aliway/images/projects/latinos-in-london.png',
    palette: ['#ED1C24', '#000000', '#FFFFFF'],
    related: ['movie-bucket-website'],
    description: (
      `This is a proposal for a website of the same name, it collects all the
      functionalities and traits of the current version and organises them in
      clear and structured sections. This project re-structures the way content
      is consumed throughout the site and preserves the company's brand identity.
      `
    ),
  },
  {
    name: 'Santa Murs Landing Page',
    slug: 'santa-murs-landing-page',
    imageUrl: '/aliway/images/projects/santa-murs-webiste.png',
    palette: ['#F48282', '#5B5B5B', '#FFFFFF'],
    related: ['free-will-communitiy-email-marketing', 'birki-landing-page'],
    description: (
      `The goal of this page is to promote the artist's upcoming tour.
      Its approach is simple yet effective; it exposes the promoter,
      the artist's name and a call to action linked to a mailing list.
      `
    ),
  },
  {
    name: 'Movie Bucket Landing Page',
    slug: 'movie-bucket-website',
    imageUrl: '/aliway/images/projects/movie-bucket-website.png',
    palette: ['#16233B', '#00D29E', '#F1F1F1'],
    related: ['latinos-in-london'],
    description: (
      `An interactive movie search application. The idea behind this web app is
      to serve as a movie finder. it constructed with simplicity in mind where
      interaction is self-generated by the user's input.
      `
    ),
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
    name: 'Calendar',
    slug: 'calendar',
    imageUrl: '/aliway/images/projects/calendar.png',
    description: 'Designing ISO and android calendar screen  for news app , using customised icons and  content based on research and work in Sketch designer.',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },
  {
    name: 'Articles app',
    slug: 'article-screen',
    imageUrl: '/aliway/images/projects/article-screen.png',
    description: 'TODO//',
    palette: ['gray', 'red', 'blue', 'orange'],
    related: ['news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard', 'news-app', 'calendar', 'analytics-dashboard'],
  },
]

export default I.fromJS(data)
