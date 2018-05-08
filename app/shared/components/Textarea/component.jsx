import React from 'react'
import classNames from 'classnames'
import FormHint from '../FormHint/component.jsx'

const Textarea = props => {
  let data = props.data ? {[props.data]: true} : null
  let classes = classNames('form-group', props.modifiers)

  return (
    <div className={classes}>
      <label className='form-label' htmlFor={props.id}>{props.label}
        {props.supporting && <FormHint>{props.supporting}</FormHint>}
      </label>
      <textarea {...data} className='form-control form-control-full' id={props.id} name={props.name} rows={props.rows || 5} defaultValue={props.value}></textarea>
    </div>
  )
}

export default Textarea
