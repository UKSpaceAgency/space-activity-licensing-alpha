'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import basicAuth from 'express-basic-auth'
import { RouterContext, match } from 'react-router'
import React from 'react'
import { Provider } from 'react-redux'
import ReactDOMServer from 'react-dom/server'
import cookie from 'react-cookie'
import cookieParser from 'cookie-parser'
import { getRoutes } from '../shared/routes'
import { exists } from '../shared/utilities'
import { generateStore } from '../shared/store'

import Head from '../shared/components/Head/component.jsx'

/*
 * Express routes
 */
import apiRoutes from './api/v1/api.js'

/*
 * Project configuration
*/
import { config } from 'config'

import packageInfo from '../../package.json'

var store

const app = express()

app.use('/api/v1', apiRoutes)
app.use(basicAuth({
    users: { 'admin': 'supersecret' },
    challenge: true
}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static('../static'))

/*
 * Pass Express over to the App via the React Router
 */
app.get('*', function (req, res) {
  store = generateStore()

  cookie.plugToRequest(req, res)

  match({routes: getRoutes(store), location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      // Error with routing
      res.status(500).send(error.message)
      return
    }

    if (redirectLocation) {
      // Handle redirects
      console.log('REDIRECTING TO: ' + redirectLocation.pathname + redirectLocation.search)
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      return
    }

    let componentHtml = ''
    let state = store.getState()

    // changed from renderToString to renderToStaticMarkup
    try {
      componentHtml = ReactDOMServer.renderToStaticMarkup((
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      ))
    } catch (err) {
      console.log(err)
    }

    let title = 'Space UK'

    if (state.error) {
      switch (state.error) {
        case '404':
          title = 'Page not found (404)'
          break
        case 500:
        default:
          title = 'Server error'
          break
      }
    } else if (exists(state, 'app.pageData.head.title')) {
      title = state.app.pageData.head.title
    }

    let status = state.error ? state.error : 200

    let componentHead = ReactDOMServer.renderToStaticMarkup(<Head {...state.app.pageData} error={state.app.error} />)

    let renderedHtml = renderFullPageHtml(componentHtml, componentHead)
    return res.status(status).send(renderedHtml)
  })
})

// Joel - i have removed the scripts from the body bottom
// might need to reinstate them
function renderFullPageHtml (html, head) {
  return `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
      ${head}
    </head>
    <body>
      <div id='app'>${html}</div>
    </body>
    </html>
  `
}

const port = process.env.PORT || 3000

var server = app.listen(port, () => {
  let host = server.address().address

  console.log('Compiled in ' + config.buildConfig + ' mode')
  console.log('NODE_ENV set to ' + process.env.NODE_ENV)
  console.log('BUILD_CONFIG set to ' + process.env.BUILD_CONFIG)

  console.log(packageInfo.name + ' app listening at http://%s:%s', host, port)
})
