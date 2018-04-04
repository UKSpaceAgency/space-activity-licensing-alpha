import React from 'react'

const Tablist = props => {

  return (
    <ul role='tablist'>
      {props.children}
    </ul>
  )
}

export default Tablist
