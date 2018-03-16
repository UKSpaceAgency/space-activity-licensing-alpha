import React from 'react'

export default class Logo extends React.Component {
  render () {
    return (
      <div className='header-logo'>
        <a href='https://www.gov.uk' title='Go to the GOV.UK homepage' id='logo' className='content'>
          <img src='/ui/img/gov.uk_logotype_crown.png' width='36' height='32' alt='' />
          GOV.UK
        </a>
      </div>
    )
  }
}
