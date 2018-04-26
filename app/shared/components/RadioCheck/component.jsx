import React from 'react'
import classNames from 'classnames'
import FormHint from '../FormHint/component.jsx'
import Icon from '../Icon/component.jsx'

const RadioCheck = props => {
  let formClasses = classNames('form-group', props.groupClassName, props.fieldModifiers)
  let classes = classNames('multiple-choice', props.className, props.modifiers)
  let booleans = props.inputs.map((val, i) => {
    let checked = val.checked ? {'checked': true} : null
    let data = val.data ? {[val.data.key]: val.data.value} : null

    return (
      <div className={classes} key={i} {...data}>
        <input id={val.id} type={props.type} name={props.name} {...checked} value={val.value} />
        <label htmlFor={val.id}>{val.icon && <Icon {...val.icon} />}{val.value}</label>
        {val.supporting && <FormHint className='form-hint--boolean'>{val.supporting}</FormHint>}
      </div>
    )
  })

  return (
    <div className={formClasses}>
      {props.label && <label className='form-label'>
        {props.label}
      </label>}
      {props.supporting && <FormHint>{props.supporting}</FormHint>}
      {booleans}
    </div>
  )
}

export default RadioCheck
