import React from 'react'
import classNames from 'classnames'
import formBuilder from '../../components/FormBuilder/component.jsx'

const Fieldset = props => {
  let classes = classNames(props.className, props.modifiers)

  return (
    <fieldset className={classes}>
      <legend>
        <span className='heading-medium'>
          {props.label}
          {props.supporting && <span className='form-hint body-text'>
            {props.supporting}
          </span>}
        </span>
      </legend>

      {props.items && props.items.map((val, i) => {
        return formBuilder(val)
      })}

    </fieldset>
  )
}

export default Fieldset
