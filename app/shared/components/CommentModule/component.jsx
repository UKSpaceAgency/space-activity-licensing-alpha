import React from 'react'
import classNames from 'classnames'
import Comment from '../Comment/component.jsx'
import Textarea from '../Textarea/component.jsx'
import FormGroup from '../FormGroup/component.jsx'
import Heading from '../Heading/component.jsx'
import Button from '../Button/component.jsx'
import FileUpload from '../FileUpload/component.jsx'
import DateInputContainer from '../../containers/DateInputContainer/component.jsx'
import Select from '../Select/component.jsx'
import Fieldset from '../Fieldset/component.jsx'
import Divider from '../Divider/component.jsx'
import ButtonGroup from '../ButtonGroup/component.jsx'
import RadioCheck from '../RadioCheck/component.jsx'

const CommentModule = props => {
  let classes = classNames('comments', props.className, props.modifiers)
  let blockClasses = classNames({
    'comments--new': props.blockModifier
  })
  let comments = props.comments !== null && props.comments.map((v, i) => {
    v['id'] = props.id + '_' + i
    return <Comment key={i} {...v}/>
  })

  return (
    <section className={classes} id={props.id} data-comment={props.id}>
      <div className={blockClasses}>
      {comments}
      </div>
      {!props.hideCommenting && <div className='comment-add spacing-top--single' data-comment-add={props.from || 'Admin'}>
        <p className='font-xsmall d-block'>Only post comments that are relevant to the application - do not include personal opinions or information. <a href='#'>Read more in our privacy guidelines</a>.</p>
        <Textarea data='data-textarea' className='form-control-full' value={props.value || ''}/>
        {props.subject && <FormGroup {...props.subject}/>}
        {props.source && <Fieldset {...props.source}/>}
        {props.deadline && <DateInputContainer className='d-inline-block' {...props.deadline}/>}
        {props.notice && <RadioCheck {...props.notice.checkbox}/>}
        {props.assignees && <Select {...props.assignees}/>}
        {props.fileupload && <FileUpload {...props.fileupload} className='spacing--single'/>}
        <ButtonGroup>
          <Button data='data-comment-add-submit' className='button--secondary'>Post comment</Button>
          <Button data='data-comment-add-discard' className='button--link'>Discard</Button>
        </ButtonGroup>
      </div>}
      <Divider/>
      {!props.hideCommenting && <div className='comments-header'>
        <Button data='data-comment-add-comment' className='button--secondary'>Add comment</Button>
      </div>}
    </section>
  )
}

export default CommentModule
