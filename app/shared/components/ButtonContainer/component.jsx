import React from 'react'
import Button from '../../components/Button/component.jsx'

const ButtonContainer = props => {
  // let buttons = props.buttons.map((val, i) => <Button value={val.value} key={i}>{val.label}</Button>)

  return (
    <div className='button-container'>
      <a className='button button-start' href='/register'>
        Create an account
      </a> or <a href='/sign-in'>sign in</a> if you’ve used it before
    </div>
  )
}

export default ButtonContainer
