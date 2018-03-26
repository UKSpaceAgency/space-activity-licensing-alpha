import React from 'react'
import classNames from 'classnames'
import Comment from '../Comment/component.jsx'
import Textarea from '../Textarea/component.jsx'
import Heading from '../Heading/component.jsx'
import Button from '../Button/component.jsx'
import FileUpload from '../FileUpload/component.jsx'

const CommentModule = props => {
  let classes = classNames('comments', props.className, props.modifiers)
  console.log(props.comments)
  let comments = props.comments.map((v, i) => {
    v['id'] = props.id + '_' + i
    return <Comment key={i} {...v}/>
  })

  return (
    <section className={classes} id={props.id} data-comment={props.id}>
      <div className='comments-header'>
        Comments (<span data-comment-total>0</span>)
        <Button data='data-comment-add-comment' className='float-right'>Add comment</Button>
      </div>
      <div className='comment-add' data-comment-add>
        <Textarea data='data-textarea'/>
        <Button data='data-comment-add-submit'>Post comment</Button>
        <Button data='data-comment-add-discard' className='float-right button--link'>Discard</Button>
        <FileUpload {...props.fileupload} />
      </div>
      {comments}
    </section>
  )
}

export default CommentModule
