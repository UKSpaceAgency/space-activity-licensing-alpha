import React from 'react'
import classNames from 'classnames'
import Heading from '../Heading/component.jsx'

const Banner = props => {
  let classes = classNames('phase-banner constrained', props.className, props.modifiers)

  return (
    <div className={classes}>
      <p>
        <strong className='phase-tag'>{props.label}</strong>
        <Heading {...props.heading}/>
      </p>
    </div>
  )
}

export default Banner
