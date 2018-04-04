import React from 'react'
import FormGroup from '../../components/FormGroup/component.jsx'
import Legend from '../../components/Legend/component.jsx'
import Icon from '../../components/Icon/component.jsx'

const DateInputContainer = props => {
  let icon = {
    'modifiers': 'icon-calendar icon--large spacing-top--single',
    'label': 'calendar'
  }

  return (
    <div className='form-group'>
      <fieldset>
        <Legend legend={props.legend}/>
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
