import _ from 'lodash'

export default (actions, {dispatch}) => {
  const Action = {}
  _.forEach(actions, (action, name) => {
    if (_.isFunction(action)) {
      Action[name] = (...args) => {
        dispatch({type: name})
        return Promise.resolve(action.apply(null, args))
        .then(data => {
          const type = `${name}Success`
          dispatch({type, data})
          return data
        })
        .catch(error => {
          const type = `${name}Error`
          dispatch({type, error})
          return Promise.reject(error)
        })
      }
    } else {
      return ({dispatch}) => dispatch(action)
    }
  })
  return Action
}
