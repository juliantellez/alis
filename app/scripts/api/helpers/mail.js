import Mail from '../definitions/Mail'

export default {
  getFromData (data) {
    return new Mail({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
    })
  },
}
