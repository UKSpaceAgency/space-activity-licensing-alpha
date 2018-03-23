import React from 'react'
import classNames from 'classnames'
import Longform from '../Longform/component.jsx'
import Heading from '../Heading/component.jsx'
import List from '../List/component.jsx'

const Comment = props => {
  let classes = classNames('comment__item', props.className, props.modifiers)

  return (
    <article className={classes} id={props.id}>
      <Heading {...props.title}/>
      <Longform {...props.text}/>
      {props.documents && <div className='comment-attachments'><Heading {...props.title}/><List list={props.documents} className='list-inline'/></div>}
    </article>
  )
}

export default Comment
