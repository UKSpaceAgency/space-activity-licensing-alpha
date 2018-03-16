import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { fetchPage, receivePageError } from './actions'

import NoMatchContainer from './containers/NoMatchContainer/component.jsx'
import ServerError from './components/ServerError/component.jsx'
import Page from './containers/Page/component'

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
      <IndexRoute component={withFallback(Page)} onEnter={getPage} slug='index'/>
      <Route path='application-overview'>
        <IndexRoute component={withFallback(Page)} onEnter={getPage} slug='application-overview' />
        <Route path='technical' component={withFallback(Page)} onEnter={getPage} slug='application-overview-technical' />
      </Route>
      <Route path='home' component={withFallback(Page)} onEnter={getPage} slug='homepage' />
      <Route path='test' component={withFallback(Page)} onEnter={getPage} slug='test' />
      <Route path='*' component={withFallback(Page)} onEnter={getPage} slug='no-match' />
    </Route>
  )
}

export { getRoutes }
