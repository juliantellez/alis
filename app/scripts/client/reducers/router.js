import Route from 'scripts/api/definitions/Route'
import {SET_ROUTE} from 'scripts/client/actions/router'

const onSetRoute = ({route}) => {
  const {path, params, query} = route
  const currentPath = path || location.pathname
  const currentQuery = query || location.query
  return new Route({
    path: currentPath,
    query: Route.setParams(currentQuery),
    params: Route.setQuery(params),
  })
}

const router = (state = {}, action) => {
  switch (action.type) {
    case SET_ROUTE: return onSetRoute(action)
    default: return new Route()
  }
}

export default router
