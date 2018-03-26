import React from 'react'
import classNames from 'classnames'
import Longform from '../Longform/component.jsx'
import List from '../List/component.jsx'
import Byline from '../Byline/component.jsx'

const Comment = props => {
  let classes = classNames('box box--padded', props.className, props.modifiers)

  return (
    <article className={classes} id={props.id} data-comment-block>
      <Byline {...props.byline}/>
      <Longform {...props}/>
      {props.documents && <div className='comment-attachments'><p><strong>Comment attachments</strong></p><List list={props.documents} className='list-inline'/></div>}
    </article>
  )
}

export default Comment
