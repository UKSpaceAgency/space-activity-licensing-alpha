import { config } from 'config'

const express = require('express')
const yaml = require('js-yaml')
const fs = require('fs')

const router = express.Router()

const NotifyClient = require('notifications-node-client').NotifyClient
const notifyClient = new NotifyClient(config.NOTIFY_API_KEY || '')

const emailAddress = config.WHITE_LISTED_EMAIL
const phoneNumber = config.DEMO_PHONE_NUMBER

let templateId = ''

/**
 * Get page data
 */

router.get('/pages/:slug', (req, res, next) => {
  if (!req.params.slug) {
    let error = new Error()
    error.status = 404
    next(error)
    return
  }

  try {
    var doc = yaml.safeLoad(fs.readFileSync('./static/' + req.params.slug + '.yml', 'utf8'))
  } catch (e) {
    next(e)
  }

  res.json(doc)
})

/**
 * Get notify
 */
router.all('/notify/:slug', (req, res) => {
  const genericData = { message: 'message', subject: 'subject' }
  const sendEmail = (templateId, data) => {
    notifyClient.sendEmail(templateId, emailAddress, { personalisation: data })
    .then(response => {
      console.log(response)
      res.sendStatus(200)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500).send(err)
    })
  }
  const sendSms = (templateId, data) => {
    notifyClient.sendSms(templateId, phoneNumber, { personalisation: data })
    .then(response => {
      console.log(response)
      res.sendStatus(200)
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500).send(err)
    })
  }
  // get notify data
  try {
    var notifyData = yaml.safeLoad(fs.readFileSync('./static/notify-data.yml', 'utf8'))
    // add protocol/host to link url
    notifyData.emailLink = config.api + notifyData.emailLink
    notifyData.smsLink = config.api + notifyData.smsLink
  } catch (e) {
    // catch error
    res.sendStatus(500)
  }
  // switch statement
  switch (req.params.slug) {
    case 'demo-email':
      templateId = 'eefa4b4e-03c1-4e83-b3db-47637e5abda1'
      sendEmail(templateId, notifyData)
      break
    case 'demo-sms':
      templateId = '7129b47a-77cf-4931-94a5-d52d05fc8f1f'
      sendSms(templateId, notifyData)
      break
    case 'generic-email':
      templateId = 'aea30a68-b8a1-4ce8-a213-a58190c50200'
      sendEmail(templateId, genericData)
      break
    case 'generic-sms':
      templateId = 'b69c56c4-e97b-465d-abe6-fe0e8b7d1653'
      sendSms(templateId, genericData)
      break
    default:
      res.send('why!?')
      break
  }
})

/**
 * Error handler
 */
router.use(function (err, req, res, next) {
  let status = err.status || 500

  /* eslint-disable */
  console.log(err);
  /* eslint-enable */

  let msg = err.message || err.stack || err.name || 'General error'

  res.status(status)
    .json({
      error: msg
    })
})

export default router
