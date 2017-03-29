import _ from 'lodash'

export default function defer (todo) {
  return new Promise((resolve, reject) => {
    _.defer(() => {
      todo()
      resolve()
    })
  })
}
