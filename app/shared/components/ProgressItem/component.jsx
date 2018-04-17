import React from 'react'
import classNames from 'classnames'
import Button from '../Button/component.jsx'
import Heading from '../Heading/component.jsx'
import Icon from '../Icon/component.jsx'
import Divider from '../Divider/component.jsx'

const ProgressItem = props => {
  let classes = classNames('progress__item', props.className, props.modifiers)

  return (
    <li className={classes}>
      <Heading {...props.title}/>
      <Divider {...props.divider}/>
      {props.icon && <Icon {...props.icon}/>}
      {props.button && <Button {...props.button}/>}
      {props.status && <Heading {...props.status}/>}
    </li>
  )
}

export default ProgressItem
