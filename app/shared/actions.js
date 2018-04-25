'use strict'

import axios from 'axios'
import { getApiHost } from './utilities'
import { config } from 'config'

const NotifyClient = require('notifications-node-client').NotifyClient
const notifyClient = new NotifyClient(config.NOTIFY_API_KEY)

export const REQUEST_PAGE = 'REQUEST_PAGE'
export const RECEIVE_PAGE = 'RECEIVE_PAGE'
export const RECEIVE_PAGE_ERROR = 'RECEIVE_PAGE_ERROR'
export const SEND_EMAIL = 'SEND_EMAIL'

let apiHost = getApiHost()

function requestPage () {
  return {
    type: REQUEST_PAGE
  }
}

export function receivePageError (status) {
  return {
    type: RECEIVE_PAGE_ERROR,
    error: status
  }
}

function receivePage (pageData) {
  return {
    type: RECEIVE_PAGE,
    pageData
  }
}

function sendEmail (emailData) {
  return {
    type: SEND_EMAIL,
    emailData
  }
}

export function fetchPage (slug, type = 'pages') {
  return dispatch => {
    dispatch(requestPage())
    let lookupUrl = apiHost + '/api/v1/' + type + '/' + slug
    return axios.get(lookupUrl)
      .then(res => {
        dispatch(receivePage(res.data))
      })
      .catch(err => {
        let status = err.code === 'ETIMEDOUT' ? 500 : err.response.status
        dispatch(receivePageError(status))
        return Promise.reject(err)
      })
  }
}

export function notify (emailData) {
  return dispatch => {
    dispatch(sendEmail(emailData))
    // stuff in test email code - TODO: refactor
    const templateId = '48f862be-c277-428d-8a5c-b4c4627c1753'
    const personalisation = { 'first_name': emailData.firstName }
    notifyClient.sendEmail(templateId, emailData.emailAddress, {
      personalisation: personalisation})
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err)
    })
  }
}
