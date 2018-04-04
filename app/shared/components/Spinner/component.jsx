import React from 'react'

const Spinner = () => {
  return (
    <div className={'spinner ' + props.modifiers}>
      <span className='spinner-inner'>Loading</span>
    </div>
  )
}

export default Spinner
