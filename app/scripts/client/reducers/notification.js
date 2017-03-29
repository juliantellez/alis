import _ from 'lodash'

import {
  SET_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from 'scripts/client/actions/notification'

const setNotification = (prevState = {}, nextState = {}) => {
  const {notification} = nextState
  return _.merge(prevState, {notification})
}

const notification = (state = {}, action) => {
  const types = {
    [SET_NOTIFICATION]: setNotification(state, action.state),
    [REMOVE_NOTIFICATION]: () => ({}),
  }
  return types[action.type] || state
}

export default notification
