import React from 'react'
import classNames from 'classnames'

const DateInput = props => {
  let classes = classNames('list', props.className, props.modifiers)

  return (
    <div className='form-group'>
      <Fieldset />
    </div>
  )
}

export default DateInput
