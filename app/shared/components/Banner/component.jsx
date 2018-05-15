import React from 'react'

const Banner = props => {
  return (
    <div className={'phase-banner constrained ' + props.className}>
      <p>
        <strong className='phase-tag'>ALPHA</strong>
        <span>This is a new service – your <a href='#'>feedback</a> will help us to improve it.</span>
      </p>
    </div>
  )
}

export default Banner
