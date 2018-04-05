import React from 'react'
import Button from '../Button/component.jsx'

const ButtonGroup = props => {
  let buttons = props.buttons ? props.buttons.map((v, i) => <Button {...v} key={i}/>) : null

  return (
    <div className='button-group'>
      {buttons}{props.children}
    </div>
  )
}

export default ButtonGroup
