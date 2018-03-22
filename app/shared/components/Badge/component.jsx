import React from 'react'
import classNames from 'classnames'

const Badge = props => {
  let classes = classNames('badge', props.modifiers, props.className)
  let item

  if (props.url) {
    item = (<a href={props.url}>
      {props.text}{props.children}
    </a>)
  } else {
    item = (
      <span>{props.text}{props.children}</span>
    )
  }

  return (
    <span className={classes}>
      {item}
    </span>
  )
}

export default Badge
