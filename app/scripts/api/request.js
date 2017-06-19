import I from 'immutable'
import _ from 'lodash'
import request from 'superagent'
import {baseUrl} from 'scripts/utils/env'

const post = (url, manager, method, data = {}) => {
  let path = `${url}${manager}${method}`
  return new Promise((resolve, reject) => {
    request
    .post(path)
    .send(data)
    .withCredentials()
    .end((e, res) => {
      const hasError = !_.isEmpty(e)
      const hasBody = !hasError && !_.isEmpty(res.body)
      const data = hasBody ? res.body : res
      return hasError ? reject(new Error(e)) : resolve(I.fromJS(data))
    })
  })
}

export default {
  post,
  api: post.bind(null, baseUrl, 'api/'),
}
