import _ from 'lodash'

export default actions => {
  const Actions = {}
  _.forEach(actions, (action, name) => {
    if (_.isFunction(action)) {
      Actions[name] = (...args) => {
        return ({dispatch}) => {
          dispatch({type: name})
          return Promise.resolve(action.apply(null, args))
          .then(data => {
            const type = `${name}_SUCCESS`
            dispatch({type, data})
            return data
          })
          .catch(error => {
            const type = `${name}_ERROR`
            dispatch({type, error})
            return Promise.reject(error)
          })
        }
      }
    } else {
      return ({dispatch}) => dispatch(action)
    }
  })
  return Actions
}
