import http from 'http'

const clientId = 'FREE_TRIAL_ACCOUNT' // No need to change
const clientSecret = 'PUBLIC_SECRET'  // No need to change

const jsonPayload = JSON.stringify({
  number: "+447950554650",  //  Specify the recipient's number here. NOT the gateway number
  message: "Howdy, isn't this exciting?"
})

const options = {
  hostname: "api.whatsmate.net",
  port: 80,
  path: "/v1/whatsapp/single/message/2",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-WM-CLIENT-ID": clientId,
    "X-WM-CLIENT-SECRET": clientSecret,
    "Content-Length": Buffer.byteLength(jsonPayload)
  }
}

const request = new http.ClientRequest(options)
request.end(jsonPayload)

request.on('response', function (response) {
  console.log('Heard back from the WhatsMate WA Gateway:\n');
  console.log('Status code: ' + response.statusCode);
  response.setEncoding('utf8')
  response.on('data', chunk => console.log(chunk))
})
