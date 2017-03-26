export default (request, reply, payload, error) => {
  console.log('PATH:', request.path + '\n')
  console.log('ERROR:', JSON.stringify(error.output) + '\n')
  console.log('PAYLOAD:', JSON.stringify(request.payload) + '\n')
  return reply(error)
}
