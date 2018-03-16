import React from 'react'

const RadioCheck = props => {
  let booleans = props.inputs.map((val, i) => {
    let checked = val.true ? {'checked': true} : null

    return (
      <div className='multiple-choice' key={i}>
        <input id={val.id} type={props.type} name={props.name} {...checked} value={val.value} />
        <label htmlFor={val.id}>{val.value}</label>
      </div>
    )
  })

  return (
    <div className='form-group'>
      {props.label && <label className='form-label'>
        {props.label}
      </label>}
      {props.supporting && <span className='form-hint body-text'>
        {props.supporting}
      </span>}
      {booleans}
    </div>
  )
}

export default RadioCheck
