import React from 'react'

const Tabpanel = props => {

  return (
    <section id={props.id} role='tabpanel' aria-labelledby={props.id + '-tab'} hidden>
      {props.children}
    </section>
  )
}

export default Tabpanel
