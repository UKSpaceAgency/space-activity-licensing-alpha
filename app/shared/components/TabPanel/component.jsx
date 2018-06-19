import React from 'react'

const Tabpanel = props => {
  return (
    <section id={props.id} role='tabpanel' aria-labelledby={props.id + '-tab'} hidden className='tabs__panel'>
      {props.children}
    </section>
  )
}

export default Tabpanel
