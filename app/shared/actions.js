'use strict'

import axios from 'axios'
import { getApiHost } from './utilities'
import { config } from 'config'

const NotifyClient = require('notifications-node-client').NotifyClient
const notifyClient = new NotifyClient(config.NOTIFY_API_KEY || "")

export const REQUEST_PAGE = 'REQUEST_PAGE'
export const RECEIVE_PAGE = 'RECEIVE_PAGE'
export const RECEIVE_PAGE_ERROR = 'RECEIVE_PAGE_ERROR'
export const SEND_NOTIFICATION = 'SEND_NOTIFICATION'

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

function sendNotification (userData) {
  return {
    type: SEND_NOTIFICATION,
    userData
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

export function notifyByEmail (userData) {
  return dispatch => {
    dispatch(sendNotification(userData))
    // stuff in test email code - TODO: refactor
    const templateId = '48f862be-c277-428d-8a5c-b4c4627c1753'
    const personalisation = { 'first_name': userData.firstName }
    notifyClient.sendEmail(templateId, userData.emailAddress, {
      personalisation: personalisation})
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err)
    })
  }
}

export function notifyBySms (userData) {
  return dispatch => {
    dispatch(sendNotification(userData))
    // stuff in test SMS code - TODO: refactor
    const templateId = '8b97b04f-8461-4f30-958d-a392c109ed1c'
    const personalisation = { 'first_name': userData.firstName }
    notifyClient.sendSms(templateId, userData.phoneNumber, {
      personalisation: personalisation})
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err)
    })
  }
}
