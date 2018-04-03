import React from 'react'

const Select = props => {
  let selected = []
  let options = props.options.map((val, i) => {
    if (val.selected) {
      selected.push(val.value)
    }
    return <option value={val.value} key={i}>{val.label}</option>
  })
  let multiple = props.multiple ? {'multiple': true, 'size': props.options.length} : null
  let data = props.data ? {[props.data]: true} : null

  return (
    <div className='form-group' {...data}>
      <label className='form-label' htmlFor={props.id}>{props.label}{props.supporting && <span className='form-hint'>{props.supporting}</span>}</label>
      <select className='form-control' id={props.id} name={props.name} value={selected || ''} {...multiple}>
        {options}
      </select>
    </div>
  )
}

export default Select
