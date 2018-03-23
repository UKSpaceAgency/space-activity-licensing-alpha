import React from 'react'
import classNames from 'classnames'
import Comment from '../Comment/component.jsx'

const CommentModule = props => {
  let classes = classNames('comment__items', props.className, props.modifiers)
  let comments = props.comments.map((v, i) => {
    return <Comment {...v}/>
  })

  return (
    <section className={classes} data-comment={props.id}>
      {comments}
    </section>
  )
}

export default CommentModule
