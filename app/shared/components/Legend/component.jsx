import React from 'react'

const Legend = props => {
  return (
    <legend>
      <span className='form-label'>
        {props.legend}
      </span>
    </legend>
  )
}

export default Legend
