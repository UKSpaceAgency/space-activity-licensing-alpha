import React from 'react'
import FormHint from '../FormHint/component.jsx'

const Textarea = props => {
  let data = props.data ? {[props.data]: true} : null

  return (
    <div className='form-group'>
      <label className='form-label' htmlFor={props.id}>{props.label}
        {props.supporting && <FormHint>{props.supporting}</FormHint>}
      </label>
      <textarea {...data} className='form-control form-control-full' id={props.id} name={props.name} rows={props.rows || 5}>{props.value}</textarea>
    </div>
  )
}

export default Textarea
