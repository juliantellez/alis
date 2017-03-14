import I from 'immutable'
import _ from 'lodash'
import request from 'superagent'
import {baseUrl} from 'scripts/utils/env'

const post = (url, manager, method, data = {}) => {
  let path = `${url}/${manager}/${method}/`
  return new Promise((resolve, reject) => {
    request
    .post(path)
    .send(data)
    .end((e, res) => {
      const hasError = !_.isEmpty(e)
      return hasError ? reject(new Error(e)) : resolve(I.fromJS(res.body.response))
    })
  })
}

export default {
  post,
  api: post.bind(null, baseUrl, 'api'),
}
