import React from 'react'

const Select = props => {
  let options = props.options.map((val, i) => <option value={val.value} key={i}>{val.label}</option>)

  return (
    <div className='form-group'>
      <label className='form-label' htmlFor={props.id}>{props.label}{props.supporting && <span className='form-hint'>{props.supporting}</span>}</label>
      <select className='form-control' id={props.id} name={props.name} defaultValue={props.selected || ''}>
        {options}
      </select>
    </div>
  )
}

export default Select
