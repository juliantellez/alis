/* eslint-disable max-len */
import I from 'immutable'

const slugs = {
  DRILLS_GURU_LOGO: 'drills-guru-logo',
  DRILLS_GURU_WEBSITE: 'drills-guru-webiste',
  DRILLS_GURU_SECTION: 'drills-guru-section',
  LATINOS: 'latinos-in-london',
  BUTTERFLY: 'butterfly-sketch',
  SVG_PORTRAIT: 'svg-portrait',
  BIRKI: 'birki',
  SANTA_MURS: 'santa-murs-website',
  FREE_WILL: 'free-will-communitiy-website',
  DASHBOARD: 'analytics-dashboard',
  ARTIFICIAL_INTELLIGENCE: 'artificial-intelligence',
  AMIGOS: 'amigos',
  MOVIE_BUCKET: 'movie-bucket',
}

const data = [
  {
    name: 'Amigos Website',
    slug: slugs.AMIGOS,
    imageUrl: '/aliway/images/projects/amigos.png',
    palette: [ '#FF7F17', '#FFFFFF', '#D50000' ],
    related: [slugs.MOVIE_BUCKET, slugs.LATINOS],
    description: (`
      An interactive social application that creates social events
      and connects users in a given area. This is a real time application that
      enables users to localise events and nearby users.
      It has been built around google APIs and which are wrapped around
      a minimalistic UI.
    `),
  },
  {
    name: 'Laviston Website',
    slug: slugs.ARTIFICIAL_INTELLIGENCE,
    imageUrl: '/aliway/images/projects/laviston.png',
    palette: [ '#4E9ADB', '#FFDB1F', '#999999', '#FFFFFF', '#22416C', '#021637', '#B63A3A', '#434343' ],
    related: [slugs.DRILLS_GURU_WEBSITE, slugs.AMIGOS],
    description: (`
      The primary value of this website was focused on clearly defining
      the various services provided by Laviston. This design comprises a simple
      but solid structure that projects fidelity and stability.
    `),
  },
  {
    name: 'Latinos in London Website',
    slug: slugs.LATINOS,
    imageUrl: '/aliway/images/projects/latinos_in_london.png',
    palette: [ '#EDC1C24', '#000000', '#FFFFFF' ],
    related: [slugs.MOVIE_BUCKET, slugs.AMIGOS],
    description: (`
    This is a proposal for a website of the same name,
    it collects all the functionalities and traits of the current
    version and organises them in clear and structured sections.
    This project re-structures the way content is consumed throughout
    the site and preserves the company's brand identity.
    `),
  },
  {
    name: 'Santa Murs Landing Page',
    slug: slugs.SANTA_MURS,
    imageUrl: '/aliway/images/projects/santa_murs_webiste.png',
    palette: [ '#F48282', '#5B5B5B', '#FFFFFF' ],
    related: [slugs.FREE_WILL, slugs.BIRKI],
    description: (`
    The goal of this page is to promote the artist's upcoming tour.
    Its approach is simple yet effective; it exposes the promoter,
    the artist's name and a call to action linked to a mailing list.
    `),
  },
  {
    name: 'Birki Landing Page',
    slug: slugs.BIRKI,
    imageUrl: '/aliway/images/projects/birki_website.png',
    palette: [ '#920043', '#000000', '#FFFFFF' ],
    related: [slugs.SANTA_MURS, slugs.FREE_WILL],
    description: (`
    The goal of this project was to target a seasonal audience and generate
    leads for a small bakery. it includes a simple form for the visitor to get
    into contact with birky, and further encourages leads generation by
    offering a limited time offer.
    `),
  },
  {
    name: 'Movie Bucket Landing Page',
    slug: slugs.MOVIE_BUCKET,
    imageUrl: '/aliway/images/projects/movie-bucket.png',
    palette: [ '#16233B', '#00D29E', '#F1F1F1' ],
    related: [slugs.LATINOS, slugs.AMIGOS],
    description: (`
    An interactive movie search application.
    The idea behind this web app is to serve as a movie finder.
    It's constructed with simplicity in mind where interaction is
    self-generated by the user's input.
    `),
  },
  {
    name: 'Drills Guru Logo Design',
    slug: slugs.DRILLS_GURU_LOGO,
    imageUrl: '/aliway/images/projects/drills_guru_logo.png',
    palette: [ '#FE4600', '#FFFFFF' ],
    related: [slugs.DRILLS_GURU_WEBSITE, slugs.DRILLS_GURU_SECTION],
    description: (`
      Drills Guru is an educational website which promotes the acquisition
      of knowledge through repetitive and selective practice.
      This logo explores the concept of technology and mentoring and their
      association with the learning process.
    `),
  },
  {
    name: 'Drills Guru Landing Page',
    slug: slugs.DRILLS_GURU_WEBSITE,
    imageUrl: '/aliway/images/projects/drills_guru_website.png',
    palette: [ '#FE4600', '#5B5B5B', '#FFFFFF', '#0456A1' ],
    related: [slugs.DRILLS_GURU_SECTION, slugs.DRILLS_GURU_LOGO, slugs.LATINOS],
    description: (`
      This page aims to create a memorable experience by guiding the user
      towards the desired action ("find and click").
      Visitors are drawn further into the site by suggesting proposed actions
      but supporting them with a search functionality.
      This page also provides quick access to basic navigation needs such as
      quick checkout, sign-in and sign-up.
    `),
  },
  {
    name: 'Drills Guru\'s Profile Page',
    slug: slugs.DRILLS_GURU_SECTION,
    imageUrl: '/aliway/images/projects/drills_guru_section.png',
    palette: [ '#FE4600', '#5B5B5B', '#FFFFFF', '#0456A1' ],
    related: [slugs.DRILLS_GURU_WEBSITE, slugs.DRILLS_GURU_LOGO, slugs.LATINOS],
    description: (`
      The idea behind this design is to build customer trust.
      Users are introduced to a 'Guru' (the seller) via a video
      and a short description. In order to establish good communication
      between seller and buyer, a series of suggested videos are also made
      available to the user; these videos are related to a recent search and
      organised by popularity.
    `),
  },
  {
    name: 'Svg Portrait',
    slug: slugs.SVG_PORTRAIT,
    imageUrl: '/aliway/images/projects/cindy.png',
    palette: [
      '#E7E7E7',
      '#C8A6A4',
      '#36505C',
      '#010101',
      '#4B3D38',
      '#F7DEDB',
      '#C0F5FF',
      '#EAD8CE',
      '#E4E4E4',
      '#C5AEA6',
      '#AI535A',
      '#A7BE7E',
      '#8E9662',
      '#866744',
      '#DA9A97',
      '#B43C4A',
      '#FF90AA',
      '#E45978',
      '#EA769D',
      '#F5A2BB',
      '#DD85A5',
      '#EC5A7C',
      '#52342A',
      '#8A4C39',
      '#A47A54',
      '#D59F80',
      '#B19C8B',
      '#826358',
    ],
    related: [slugs.BUTTERFLY],
    description: (`
    A geometric Vector Portrait. The goal of this experiment is to represent a
    face familiar to the eye using only straight lines. This work explores
    shadowing and colour tonality to recreate form, shape and space.
    The result is a more striking, yet pleasing and recognisable portrait.
    `),
  },
  {
    name: 'Analytics Dashboard',
    slug: slugs.DASHBOARD,
    imageUrl: '/aliway/images/projects/analytics_ui.png',
    palette: [ '#C571F4', '#D67EED', '#F272D5', '#FBFBFB' ],
    related: [ slugs.SVG_PORTRAIT, slugs.BUTTERFLY ],
    description: (`
    An exploration of light themes for mobile apps. It has been designed
    with a monochromatic scheme which scales down from purple-pink to white.
    The contrasting tones compose an interactive theme that attracts attention,
    creates focus and has clear legibility.
    `),
  },
  {
    name: 'Sketch exploration',
    slug: slugs.BUTTERFLY,
    imageUrl: '/aliway/images/projects/butter_sketch.png',
    palette: [
      '#99CDAF',
      '#312C2C',
      '#AAAA72',
      '#070606',
      '#C28D8D',
      '#E2E480',
    ],
    related: [ slugs.SVG_PORTRAIT, slugs.DASHBOARD ],
    description: (`
    This piece came about as a discovery of a truly amazing piece of software
    called Sketch. It explores basic concepts such as shapes, curves,
    flips, shadows, colour tonality and symmetric mirroring.
    `),
  },
  {
    name: 'Free Will Community Email Marketing',
    slug: slugs.FREE_WILL,
    imageUrl: '/aliway/images/projects/free_will_communitiy_website.png',
    related: [slugs.SANTA_MURS, slugs.BIRKI],
    palette: [ '#BCBCBC', '#E4E4E4', '#FFFFFF' ],
    description: (`
    This case study aims to raise animal protection awareness via email
    campaigns, it has a clear message and its sole purpose is to invite users
    to join a community of like minded individuals.
    `),
  },
]

export default I.fromJS(data)
