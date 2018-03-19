import { connect } from 'react-redux'

import Page from '../../components/Page/component.jsx'
import { pageBuilder } from '../../page-builder'

const mapStateToProps = (state, ownProps) => {
  let components = pageBuilder(state.app.pageData)
  return { ...state.app.pageData, components }
}

export default connect(mapStateToProps)(Page)
