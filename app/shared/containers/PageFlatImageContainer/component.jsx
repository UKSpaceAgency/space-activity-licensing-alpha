import { connect } from 'react-redux'

import PageFlatImage from '../../components/PageFlatImage/component.jsx'

const mapStateToProps = (state, ownProps) => {
  return state.app.pageData
}

export default connect(mapStateToProps)(PageFlatImage)
