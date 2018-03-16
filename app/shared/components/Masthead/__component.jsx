import React from 'react'
import classNames from 'classnames'
import UtilityNav from '../UtilityNav/component.jsx'
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
            <a href='#proposition-links' className='js-header-toggle menu'>Menu</a>
            <nav id='proposition-menu'>
              <a href='/' id='proposition-name'>GOV.UK elements</a>
              <UtilityNav />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Masthead
