import React from 'react'
import classNames from 'classnames'

const FormGroup = props => {
  let classes = classNames('form-group', props.className, props.modifiers)
  return (
    <div className={classes}>
      <label className='form-label' htmlFor={props.id}>{props.label}
        {props.supporting &&
        <span className='form-hint'>
          {props.supporting}
        </span>}
      </label>
      <input className='form-control' id={props.id} name={props.name} type='text' />
    </div>
  )
}

export default FormGroup
