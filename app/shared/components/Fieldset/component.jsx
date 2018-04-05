import React from 'react'
import classNames from 'classnames'
import formBuilder from '../../components/FormBuilder/component.jsx'

const Fieldset = props => {
  let classes = classNames('fieldset', props.className, props.fieldsetModifiers)

  return (
    <fieldset className={classes}>
      <legend className={props.modifiers || null}>
        <span className='heading-medium'>
          {props.legend}
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
