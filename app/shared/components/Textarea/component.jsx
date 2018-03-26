import React from 'react'

const Textarea = props => {
  let data = props.data ? {[props.data]: true} : null

  return (
    <div className='form-group'>
      <label className='form-label' htmlFor={props.id}>{props.label}
        {props.supporting && <span className='form-hint'>
          {props.supporting}
        </span>}</label>
      <textarea {...data} className='form-control form-control-3-4' id={props.id} name={props.name} rows={props.rows || 5}>{props.value}</textarea>
    </div>
  )
}

export default Textarea
