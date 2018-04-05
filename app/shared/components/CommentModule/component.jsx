import React from 'react'
import classNames from 'classnames'
import Comment from '../Comment/component.jsx'
import Grid from '../Grid/component.jsx'
import GridCol from '../GridCol/component.jsx'
import Textarea from '../Textarea/component.jsx'
import Heading from '../Heading/component.jsx'
import Button from '../Button/component.jsx'
import FileUpload from '../FileUpload/component.jsx'
import DateInputContainer from '../../containers/DateInputContainer/component.jsx'
import Select from '../Select/component.jsx'
import Fieldset from '../Fieldset/component.jsx'
import ButtonGroup from '../ButtonGroup/component.jsx'
import RadioCheck from '../RadioCheck/component.jsx'
import { isArray } from '../../utilities'

const CommentModule = props => {
  let classes = classNames('comments', props.className, props.modifiers)
  let comments = props.comments.map((v, i) => {
    v['id'] = props.id + '_' + i
    return <Comment key={i} {...v}/>
  })

  return (
    <section className={classes} id={props.id} data-comment={props.id}>
      <div className='comments-header'>
        <strong>Comments (<span data-comment-total>0</span>)</strong>
        <Button data='data-comment-add-comment' className='float-right button--secondary'>Add comment</Button>
      </div>
      <p className='font-xsmall d-block'>Only post comments that are relevant to the application - do not include personal opinions or information. <a href='#'>Read more in our privacy guidelines</a>.</p>
      <div className='comment-add' data-comment-add>
        <Textarea data='data-textarea' className='form-control-full'/>
        {props.source && <Fieldset {...props.source}/>}
        {props.deadline && <DateInputContainer {...props.deadline}/>}
        {props.assignees && <Select {...props.assignees}/>}
        <FileUpload {...props.fileupload} className='spacing--single'/>
        <ButtonGroup>
          <Button data='data-comment-add-submit' className='button--secondary'>Post comment</Button>
          <Button data='data-comment-add-discard' className='button--link'>Discard</Button>
          {props.notice && <RadioCheck {...props.notice.checkbox}/>}
        </ButtonGroup>
      </div>
      {comments}
    </section>
  )
}

export default CommentModule
