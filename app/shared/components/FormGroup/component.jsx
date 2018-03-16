import React from 'react'

const FormGroup = props => {
  return (
    <div className='form-group'>
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
