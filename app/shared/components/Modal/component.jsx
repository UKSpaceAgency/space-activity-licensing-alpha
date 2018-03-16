import React from 'react'

export default class Modal extends React.PureComponent {
  render () {
    return (
      <div className={'modal fade bd-example-modal-lg ' + this.props.className}>
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content padded'>
            <div className='modal-body'>
              <h2 className='h2'>Check your details and submit</h2>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
