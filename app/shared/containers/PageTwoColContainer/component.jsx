import { connect } from 'react-redux'

import PageTwoCol from '../../components/PageTwoCol/component.jsx'

const mapStateToProps = (state, ownProps) => {
  return state.app.pageData
}

export default connect(mapStateToProps)(PageTwoCol)
