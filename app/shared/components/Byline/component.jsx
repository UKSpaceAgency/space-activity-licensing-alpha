import React from 'react'
import Icon from '../Icon/component.jsx'
import Time from '../Time/component.jsx'
import Heading from '../Heading/component.jsx'

const Byline = props => {
  return (
    <div className='byline'>
      <Icon />
      <Heading/>
      <Time {...props}/>
      BYLINE
    </div>
  )
}

export default Byline
