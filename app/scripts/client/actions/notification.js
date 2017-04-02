export const SET_NOTIFICATION = 'SET_NOTIFICATION'
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export default {
  setNotification: content => ({
    type: SET_NOTIFICATION,
    content,
  }),
  removeNotification: () => ({
    type: REMOVE_NOTIFICATION,
  }),
}
