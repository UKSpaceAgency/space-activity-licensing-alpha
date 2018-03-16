import React from 'react'
import classNames from 'classnames'

const Panel = props => {
  let classes = classNames('panel', props.className, props.modifiers)

  return (
    <div className={classes}>
      {props.children}
      {props.content && <div className='text' dangerouslySetInnerHTML={{__html: props.content}} />}
    </div>
  )
}

export default Panel
