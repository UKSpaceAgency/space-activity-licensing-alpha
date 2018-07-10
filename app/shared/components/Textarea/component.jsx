import React from 'react'
import classNames from 'classnames'
import FormHint from '../FormHint/component.jsx'
import Button from '../Button/component.jsx'

const Textarea = props => {
  let data = props.data ? {[props.data]: true} : null
  let classes = classNames('form-group', props.modifiers)
  let required = props.required ? {'required': true} : null

  return (
    <div className={classes}>
      <label className='form-label' htmlFor={props.id}>{props.label}
        {props.supporting && <FormHint>{props.supporting}</FormHint>}
      </label>
      <textarea {...data} className='form-control form-control-full' id={props.id} name={props.name} rows={props.rows || 5} defaultValue={props.value} {...required}></textarea>
      {props.button && <Button {...props.button}/>}
    </div>
  )
}

export default Textarea
