import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { fetchPage, receivePageError } from './actions'

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
      <Route path='application-overview'>
        <IndexRoute component={withFallback(PageContainer)} onEnter={getPage} slug='application-overview' />
        <Route path='technical'>
          <IndexRoute component={withFallback(PageContainer)} onEnter={getPage} slug='application-overview-technical'/>
          <Route path='satellite-and-mission-overview' component={withFallback(PageGranularContainer)} onEnter={getPage} slug='technical-safety' />
          <Route path='share' component={withFallback(PageContainer)} onEnter={getPage} slug='technical-share' />
        </Route>
        <Route path='frequency'>
          <IndexRoute component={withFallback(PageGranularTwoColContainer)} onEnter={getPage} slug='application-overview-frequency-comments'/>
        </Route>
      </Route>
      <Route path='home' component={withFallback(PageContainer)} onEnter={getPage} slug='homepage' />
      <Route path='test' component={withFallback(PageContainer)} onEnter={getPage} slug='test' />
      <Route path='*' component={withFallback(PageContainer)} onEnter={getPage} slug='no-match' />
    </Route>
  )
}

export { getRoutes }
