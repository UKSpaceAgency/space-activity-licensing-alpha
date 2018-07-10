import React from 'react'

const AccordionSection = props => {
  return (
    <div className='accordion-section'>
      <div className='accordion-section-header'>
        <h2 className={props.className || 'heading-large'}>{props.heading}</h2>
      </div>
      <div className='accordion-section-body'>{props.children}<div dangerouslySetInnerHTML={{__html: props.content}}/></div>
    </div>
  )
}

export default AccordionSection
