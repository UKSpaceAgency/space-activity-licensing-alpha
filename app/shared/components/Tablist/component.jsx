import React from 'react'

const Tablist = props => {
  return (
    <ul role='tablist' className='tabs'>
      {props.children}
    </ul>
  )
}

export default Tablist
