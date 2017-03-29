export const SET_NOTIFICATION = 'SET_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export default {
  setNotification: notification => ({
    type: SET_NOTIFICATION,
    state: {notification},
  }),
  removeNotification: () => ({
    type: REMOVE_NOTIFICATION,
  }),
}
