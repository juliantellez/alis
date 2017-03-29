import _ from 'lodash'
import { SET_ROUTE } from 'scripts/client/actions/router'

const setRoute = (prevState = {}, nextState = {}) => {
  const {location, params} = nextState
  const router = {
    params,
    location,
  }
  return _.merge(prevState, router)
}

const router = (state = {}, action) => {
  const types = {
    [SET_ROUTE]: setRoute(state, action.state),
  }
  return types[action.type] || state
}

export default router
