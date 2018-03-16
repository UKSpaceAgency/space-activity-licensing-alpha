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
      </div>
    </header>
  )
}

export default Masthead
