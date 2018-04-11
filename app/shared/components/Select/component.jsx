import React from 'react'

const Select = props => {
  let options = props.options.map((val, i) => {
    let modifiers = val.modifiers ? val.modifiers : null
    return <option value={val.value} key={i} className={modifiers}>{val.label}</option>
  })
  let multiple = props.multiple ? {'multiple': true, 'size': props.options.length} : null
  let data = props.data ? {[props.data.key]: props.data.value} : null

  return (
    <div className='form-group' {...data}>
      <label className='form-label' htmlFor={props.id}>{props.label}{props.supporting && <span className='form-hint'>{props.supporting}</span>}</label>
      <select className='form-control' id={props.id} name={props.name} value={props.selected || ''} {...multiple}>
        {options}
      </select>
    </div>
  )
}

export default Select
