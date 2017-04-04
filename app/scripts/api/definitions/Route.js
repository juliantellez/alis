import I from 'immutable'

export default class Route extends I.Record({
  path: '',
  params: new I.Record({})(),
  query: new I.Record({})(),
}) {
  static setParams (params = {}) {
    return new I.Record(params)()
  }
  static setQuery (query = {}) {
    return new I.Record(query)()
  }
}
