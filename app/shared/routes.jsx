import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { notifyByEmail, notifyBySms, fetchPage, receivePageError } from './actions'

import NoMatchContainer from './containers/NoMatchContainer/component.jsx'
import ServerError from './components/ServerError/component.jsx'
import PageContainer from './containers/PageContainer/component'
import PageGranularContainer from './containers/PageGranularContainer/component'
import PageTwoColContainer from './containers/PageTwoColContainer/component'
import PageGranularTwoColContainer from './containers/PageGranularTwoColContainer/component'
import PageFlatImage from './containers/PageFlatImageContainer/component'

/*
 * Render 404 / 500 errors
 */

let getRoutes = store => {
  function withFallback (WrappedComponent, selectData) {
    return class extends React.Component {
      render () {
        let state = store.getState()
        switch (state.error) {
          case 500:
            return <ServerError />
          case 404:
            return <NoMatchContainer />
          default:
            return <WrappedComponent {...this.props} />
        }
      }
    }
  }

  function getPage (nextState, replace, callback) {
    store.dispatch(fetchPage(this.slug))
      .then(() => {
        callback()
      }).catch(err => {
        console.log(err)
        // error pushed to state
        callback()
      })
  }

  function noMatchError (nextState, replace, callback) {
    store.dispatch(receivePageError(404))
    callback()
  }

  return (
    <Route path='/'>
      <IndexRoute component={withFallback(PageContainer)} onEnter={getPage} slug='index'/>
      <Route path='applications' component={withFallback(PageTwoColContainer)} onEnter={getPage} slug='application-homepage' />
      <Route path='notifications' component={withFallback(PageFlatImage)} onEnter={getPage} slug='notifications' />
      <Route path='activity' component={withFallback(PageFlatImage)} onEnter={getPage} slug='activity' />
      <Route path='application-overview'>
        <IndexRoute component={withFallback(PageContainer)} onEnter={getPage} slug='application-overview' />
        <Route path='new-member' component={withFallback(PageFlatImage)} onEnter={getPage} slug='new-member' />
        <Route path='technical'>
          <IndexRoute component={withFallback(PageContainer)} onEnter={getPage} slug='application-overview-technical'/>
          <Route path='satellite-and-mission-overview' component={withFallback(PageGranularContainer)} onEnter={getPage} slug='technical-safety' />
          <Route path='share' component={withFallback(PageContainer)} onEnter={getPage} slug='technical-share' />
          <Route path='all-attachments' component={withFallback(PageFlatImage)} onEnter={getPage} slug='all-attachments' />
        </Route>
        <Route path='frequency'>
          <IndexRoute component={withFallback(PageGranularTwoColContainer)} onEnter={getPage} slug='application-overview-frequency-comments'/>
        </Route>
      </Route>
      <Route path='sign-in'>
        <IndexRoute component={withFallback(PageContainer)} onEnter={getPage} slug='sign-in'/>
        <Route path='authenticate' component={withFallback(PageContainer)} onEnter={getPage} slug='authenticate' />
        <Route path='log-out' component={withFallback(PageContainer)} onEnter={getPage} slug='log-out' />
        <Route path='sign-in-engineer' component={withFallback(PageContainer)} onEnter={getPage} slug='sign-in-engineer' />
        <Route path='authenticate-engineer' component={withFallback(PageContainer)} onEnter={getPage} slug='authenticate-engineer' />
      </Route>
      <Route path='homepage'>
        <IndexRoute component={withFallback(PageContainer)} onEnter={getPage} slug='homepage' />
        <Route path='satellite-operator-license' component={withFallback(PageContainer)} onEnter={getPage} slug='satellite-operator-license' />
        <Route path='application-process' component={withFallback(PageContainer)} onEnter={getPage} slug='application-process' />
      </Route>
      <Route path='apply'>
        <IndexRoute component={withFallback(PageContainer)} onEnter={getPage} slug='apply-page-1'/>
        <Route path='register' component={withFallback(PageContainer)} onEnter={getPage} slug='apply-register' />
        <Route path='page-2' component={withFallback(PageContainer)} onEnter={getPage} slug='apply-page-2' />
        <Route path='page-4' component={withFallback(PageContainer)} onEnter={getPage} slug='apply-page-4' />
        <Route path='page-5' component={withFallback(PageContainer)} onEnter={getPage} slug='apply-page-5' />
        <Route path='your-organisation' component={withFallback(PageContainer)} onEnter={getPage} slug='apply-your-organisation' />
        <Route path='confirmation' component={withFallback(PageContainer)} onEnter={getPage} slug='apply-confirmation' />
        <Route path='email-confirmation' component={withFallback(PageFlatImage)} onEnter={getPage} slug='apply-email-confirmation' />
      </Route>
      <Route path='operator'>
        <IndexRoute component={withFallback(PageContainer)} onEnter={getPage} slug='operator-overview'/>
        <Route path='engineer-email' component={withFallback(PageFlatImage)} onEnter={getPage} slug='engineer-email-technical' />
        <Route path='operator-eligibility-assessing' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-eligibility-assessing' />
        <Route path='operator-eligibility-has-been-assessed' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-eligibility-has-been-assessed' />
        <Route path='operator-eligibility-assessing-approved' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-eligibility-assessing-approved' />
        <Route path='operator-submission-ready-email' component={withFallback(PageFlatImage)} onEnter={getPage} slug='operator-submission-ready-email' />
        <Route path='operator-overview-technical-partial-submit' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-overview-technical-partial-submit' />
        <Route path='operator-overview-technical-partial-submit-2' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-overview-technical-partial-submit-2' />
        <Route path='operator-overview-unlocked' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-overview-unlocked' />
        <Route path='operator-overview-technical' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-overview-technical' />
        <Route path='operator-overview-technical-draft' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-overview-technical-draft' />
        <Route path='operator-overview-technical-submit' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-overview-technical-submit' />
        <Route path='technical-eligibility-questions' component={withFallback(PageContainer)} onEnter={getPage} slug='technical-eligibility-questions' />
        <Route path='technical-draft' component={withFallback(PageGranularTwoColContainer)} onEnter={getPage} slug='operator-technical-questions-draft' />
        <Route path='technical' component={withFallback(PageGranularTwoColContainer)} onEnter={getPage} slug='operator-technical-questions' />
        <Route path='technical-share' component={withFallback(PageContainer)} onEnter={getPage} slug='operator-technical-share' />
        <Route path='link-previous-application' component={withFallback(PageFlatImage)} onEnter={getPage} slug='link-previous-application' />
        <Route path='link-section-summaries' component={withFallback(PageFlatImage)} onEnter={getPage} slug='link-section-summaries' />
        <Route path='technical-section-linked' component={withFallback(PageFlatImage)} onEnter={getPage} slug='technical-section-linked' />
      </Route>
      <Route path='*' component={withFallback(PageContainer)} onEnter={getPage} slug='no-match' />
    </Route>
  )
}

export { getRoutes }
