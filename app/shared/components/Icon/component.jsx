import React from 'react'
import classNames from 'classnames'

const Icon = props => {
  let classes = classNames('icon', props.className, props.modifiers)

  return (
    <i className={classes}>
      <span className='visually-hidden'>{props.label}</span>
    </i>
  )
}

export default Icon
