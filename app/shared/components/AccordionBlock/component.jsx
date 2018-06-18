import React from 'react'
import Accordion from '../Accordion/component.jsx'
import AccordionSection from '../AccordionSection/component.jsx'

const AccordionBlock = props => {
  return (
    <Accordion>
      {props.list && props.list.map((v, i) => {
      	return <AccordionSection key={i} {...v}/>
      })}
    </Accordion>
  )
}

export default AccordionBlock
