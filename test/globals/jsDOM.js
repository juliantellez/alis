import jsdom from 'jsdom'

// :::::::::: BROWSER ::::::::::
global.jsdom = jsdom.jsdom(
  '<!doctype html><html><body><main id="main"></main></body></html>',
  {
    url: 'http://localhost',
  }
)
global.document = global.jsdom
global.document.documentElement.clientHeight = 500
global.window = global.document.defaultView
global.navigator = global.window.navigator
global.location = global.window.location
global.HTMLElement = function () {}

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
const propagateToGlobal = window => {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}

propagateToGlobal(global.window)
