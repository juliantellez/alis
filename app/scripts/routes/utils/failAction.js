export default (request, reply, payload, error) => {
  console.warn('PATH:', request.path + '\n')
  console.warn('ERROR:', JSON.stringify(error.output) + '\n')
  console.warn('PAYLOAD:', JSON.stringify(request.payload) + '\n')
  return reply(error)
}
