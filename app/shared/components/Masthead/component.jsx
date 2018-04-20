import React from 'react'
import Logo from '../Logo/component.jsx'
import UtilityNav from '../UtilityNav/component.jsx'

const Masthead = props => {
  return (
    <header role='banner' className='masthead'>
      <div className='masthead__inner constrained'>
        <Logo />
        {props.utility && <UtilityNav {...props.utility}/>}
      </div>
    </header>
  )
}

export default Masthead

