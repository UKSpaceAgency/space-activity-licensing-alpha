import React from 'react'
import classNames from 'classnames'
import formBuilder from '../FormBuilder/component.jsx'
import FormHint from '../FormHint/component.jsx'
import Legend from '../Legend/component.jsx'

const Fieldset = props => {
  let classes = classNames('fieldset', props.className, props.fieldsetModifiers)
  let legendClasses = classNames('legend', props.modifiers)

  return (
    <fieldset className={classes}>
      {props.legend &&
      <legend className={legendClasses}>
        <span className='heading-medium'>
          {props.legend}
          {props.supporting && <FormHint>{props.supporting}</FormHint>}
        </span>
      </legend>}

      {props.items && props.items.map((val, i) => {
        return formBuilder(val)
      })}

    </fieldset>
  )
}

export default Fieldset
