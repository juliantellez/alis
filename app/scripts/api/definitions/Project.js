import I from 'immutable'

export default class Project extends I.Record({
  name: '',
  url: '',
  imageUrl: '',
  description: '',
}) {}
