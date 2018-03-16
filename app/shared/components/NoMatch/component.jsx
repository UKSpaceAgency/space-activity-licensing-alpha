import React from 'react'
import Page from '../Page/component.jsx'
import Breadcrumb from '../../components/Breadcrumb/component.jsx'

export default class NoMatch extends React.PureComponent {
  render () {
    return (
      <Page>
        <Breadcrumb navigation={this.props.breadcrumb} className='bg-green' />
        {this.props.components}
      </Page>
    )
  }
}
