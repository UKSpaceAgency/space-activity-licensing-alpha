import { connect } from 'react-redux'

import PageGranularTwoCol from '../../components/PageGranularTwoCol/component.jsx'

const mapStateToProps = (state, ownProps) => {
  return state.app.pageData
}

export default connect(mapStateToProps)(PageGranularTwoCol)
