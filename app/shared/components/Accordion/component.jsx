import React from 'react'

const Accordion = props => {
  return (
    <section className='accordion' data-accordion>
      {props.children}
    </section>
  )
}

export default Accordion
