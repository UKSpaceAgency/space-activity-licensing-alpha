import React from 'react'
import formBuilder from '../FormBuilder/component.jsx'

const Reveal = props => {
  let Components = formBuilder(props.content)
  return (
    <div className='js-hidden' id={props.id}>
      {Components}
    </div>
  )
}

export default Reveal
