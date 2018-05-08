import React from 'react'
import classNames from 'classnames'
import Heading from '../Heading/component.jsx'
import Button from '../Button/component.jsx'

const AccentBar = props => {
  let classes = classNames('accent-bar', props.modifiers)

  return (
    <section className={classes}>
      <div className='constrained align-centre'>
        <Heading {...props.heading} />
        <Button {...props.cta} />
      </div>
    </section>
  )
}
export default AccentBar
