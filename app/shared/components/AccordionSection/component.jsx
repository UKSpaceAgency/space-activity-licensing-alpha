import React from 'react'

const AccordionSection = props => {
  return (
    <div className='accordion-section'>
      <div className='accordion-section-header'>
        <h2 className='heading-large'>{props.heading}</h2>
      </div>
      <div className='accordion-section-body'>{props.children}</div>
    </div>
  )
}

export default AccordionSection
