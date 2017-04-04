import I from 'immutable'

export default class Project extends I.Record({
  name: '',
  slug: '',
  imageUrl: '',
  description: '',
}) {}
