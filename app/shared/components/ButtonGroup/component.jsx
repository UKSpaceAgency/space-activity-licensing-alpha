import React from 'react'
import Button from '../Button/component.jsx'

const ButtonGroup = props => {
  let buttons = props.buttons.map((v, i) => <Button {...v} key={i}/>)

  return (
    <div className='button-group'>
      {buttons}
    </div>
  )
}

export default ButtonGroup
