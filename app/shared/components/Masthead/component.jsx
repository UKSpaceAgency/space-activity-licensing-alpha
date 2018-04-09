import React from 'react'
import classNames from 'classnames'
import Logo from '../Logo/component.jsx'

const Masthead = props => {
  let classes = classNames('masthead', props.className)

  return (
    <header role='banner' id='global-header' className='with-proposition'>
      <div className='header-wrapper'>
        <div className='header-global'>
          <Logo />
        </div>
        <div className='header-proposition'>
          <div className='content'>
            <nav id='proposition-menu'>
              <a className='font-xsmall float-right white' href='/application-overview/new-member'>Settings</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Masthead
