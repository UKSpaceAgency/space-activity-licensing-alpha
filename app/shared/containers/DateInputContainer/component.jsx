import React from 'react'
import classNames from 'classnames'
import FormGroup from '../../components/FormGroup/component.jsx'
import Legend from '../../components/Legend/component.jsx'
import Icon from '../../components/Icon/component.jsx'
import FormHint from '../../components/FormHint/component.jsx'

const DateInputContainer = props => {
  let classes = classNames('form-group', props.className, props.modifiers)
  let icon = {
    'modifiers': 'icon-calendar icon--large spacing-top--single',
    'label': 'calendar'
  }

  return (
    <div className={classes}>
      <fieldset>
        {props.legend && <Legend legend={props.legend}/>}
        {props.supporting && <FormHint>{props.supporting}</FormHint>}
        <div className='form-date' data-date-input>
          {props.items.map((v, i) => {
            return <FormGroup {...v} key={i}/>
          })}
          {props.calendar && <Icon {...icon}/>}
        </div>
      </fieldset>
    </div>
  )
}

export default DateInputContainer
