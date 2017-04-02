import I from 'immutable'

export default class Mail extends I.Record({
  name: '',
  email: '',
  message: '',
}) {}
