import React from 'react'

export default class Logo extends React.Component {
  render () {
    return (
      <div className='header-logo'>
        <a href='/' title='Go to the homepage' id='logo' className='content'>
          Space application licensing manager
        </a>
      </div>
    )
  }
}
