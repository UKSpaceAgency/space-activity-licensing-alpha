import { connect } from 'react-redux'

import PageGranular from '../../components/PageGranular/component.jsx'

const mapStateToProps = (state, ownProps) => {
  return state.app.pageData
}

export default connect(mapStateToProps)(PageGranular)
