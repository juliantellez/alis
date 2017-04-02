import Project from '../definitions/Project'

export default {
  getFromData (data) {
    return new Project({
      name: data.get('name'),
      url: data.get('url'),
      imageUrl: data.get('imageUrl'),
      description: data.get('description'),
    })
  },
}
