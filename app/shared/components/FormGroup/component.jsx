import React from 'react'
import classNames from 'classnames'

const FormGroup = props => {
  let classes = classNames('form-group', props.className, props.modifiers)
  let attrs = {}
  if (props.attr) {
    attrs[props.attr.key] = props.attr.value
  }

  return (
    <div className={classes}>
      <label className='form-label' htmlFor={props.id}>{props.label}
        {props.supporting &&
        <span className='form-hint'>
          {props.supporting}
        </span>}
      </label>
      <input className='form-control' id={props.id} name={props.name} type={props.type || 'text'} {...attrs}/>
    </div>
  )
}

export default FormGroup
