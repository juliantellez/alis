import _ from 'lodash'

const setNotification = (prevState = {}, nextState = {}) => {
  const {content} = nextState
  const id = Math.random()
  const notification = {
    content,
    id,
  }
  return _.merge(prevState, notification)
}

const notification = (state = {}, action) => {
  const types = {
    SET_NOTIFICATION: setNotification(state, action.state),
    REMOVE_NOTIFICATION: () => ({}),
  }
  return types[action.type] || state
}

export default notification
