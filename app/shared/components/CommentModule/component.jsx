import React from 'react'
import classNames from 'classnames'
import Comment from '../Comment/component.jsx'
import Textarea from '../Textarea/component.jsx'
import Heading from '../Heading/component.jsx'
import Button from '../Heading/component.jsx'

const CommentModule = props => {
  let classes = classNames('comments', props.className, props.modifiers)
  let comments = props.comments.map((v, i) => {
    // console.log(v)
    return <Comment key={i} {...v}/>
  })

  return (
    <section className={classes} data-comment={props.id}>
      <Heading />
      <Textarea/>
      <Button {...props.button}/>
      {comments}
    </section>
  )
}

export default CommentModule
