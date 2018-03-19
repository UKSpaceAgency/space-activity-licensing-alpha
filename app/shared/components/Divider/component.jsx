import React from 'react'
import classNames from 'classnames'

const Divider = props => {
  let classes = classNames(props.className, props.modifiers)

  return (
    <hr className={classes}/>
  )
}

export default Divider
