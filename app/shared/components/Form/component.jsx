import React from 'react'
import formBuilder from '../FormBuilder/component.jsx'

const Form = props => {
  let Components = formBuilder(props.formItems)

  return (
    <form className='form' action={props.action}>
      {Components}
    </form>
  )
}

export default Form
