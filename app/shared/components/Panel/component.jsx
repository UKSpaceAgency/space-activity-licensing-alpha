import React from 'react'
import classNames from 'classnames'

const Panel = props => {
  let classes = classNames('panel', props.className, props.modifiers)
  let id = props.id ? {id: props.id} : null

  return (
    <div className={classes} {...id}>
      {props.children}
      {props.content && <div className='text' dangerouslySetInnerHTML={{__html: props.content}} />}
    </div>
  )
}

export default Panel
