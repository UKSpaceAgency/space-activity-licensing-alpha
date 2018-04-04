import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon/component.jsx'
import Time from '../Time/component.jsx'
import Heading from '../Heading/component.jsx'

const Byline = props => {
  let classes = classNames('byline', props.className, props.modifiers)

  return (
    <div className={classes}>
      <Icon {...props.icon} className='icon--byline'/>
      <Heading {...props.name}/>
      <Time {...props.date}/>
    </div>
  )
}

export default Byline
