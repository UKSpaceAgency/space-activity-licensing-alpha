import React from 'react'
import classNames from 'classnames'
import Logo from '../Logo/component.jsx'
import UtilityNav from '../UtilityNav/component.jsx'

const Masthead = props => {
  console.log(props)
  let classes = classNames('masthead', props.className)

  return (
    <header role='banner' id='global-header' className='with-proposition'>
      <div className='header-wrapper'>
        <div className='header-global'>
          <Logo />
        </div>
        {props.links && <div className='header-proposition'><UtilityNav {...props.links}/></div>}
      </div>
    </header>
  )
}

export default Masthead
