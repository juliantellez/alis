import I from 'immutable'

export default class Notification extends I.Record({
  content: '',
  id: Math.random(),
}) {}
