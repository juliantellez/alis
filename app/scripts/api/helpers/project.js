import Project from '../definitions/Project'

export default {
  getFromData (data) {
    return new Project({
      name: data.get('name'),
      slug: data.get('slug'),
      palette: data.get('palette'),
      imageUrl: data.get('imageUrl'),
      description: data.get('description'),
    })
  },
}
