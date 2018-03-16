import * as actions from './actions'

const initialState = {
  pageData: {},
  interviews: {
    results: []
  },
  loading: false,
  error: false
}

export function app (state = initialState, action) {
  switch (action.type) {
    case actions.RECEIVE_PAGE:
      return Object.assign({}, state, {
        pageData: action.pageData
      })
    case actions.REQUEST_PAGE:
      return Object.assign({}, state, {
        loading: true
      })
    case actions.RECEIVE_PAGE_ERROR:
      return Object.assign({}, state, {
        error: action.error
      })
    default:
      return state
  }
}
