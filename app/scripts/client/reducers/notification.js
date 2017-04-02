import {
  SET_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from 'scripts/client/actions/notification'
import Notification from 'scripts/api/definitions/notification'

const setNotification = ({content}) => new Notification({content})

const notification = (state, action) => {
  switch (action.type) {
    case SET_NOTIFICATION: return setNotification(action)
    case REMOVE_NOTIFICATION: return {}
    default: return {}
  }
}

export default notification
