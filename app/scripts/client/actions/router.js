export const SET_ROUTE = 'SET_ROUTE'

export default {
  setRoute: route => ({
    type: SET_ROUTE,
    state: {route},
  }),
}
