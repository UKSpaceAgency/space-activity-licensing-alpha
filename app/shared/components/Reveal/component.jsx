import React from 'react'
import FormBuilder from '../FormBuilder/component.jsx'

const Reveal = props => {
  let Components = formBuilder(props.formItems)
  return (
    <div className='js-hidden' id={props.id}>
      {Components}
    </div>
  )
}

export default Reveal
