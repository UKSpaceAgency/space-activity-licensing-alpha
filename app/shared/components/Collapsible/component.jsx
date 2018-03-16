import React from 'react'
import Panel from '../../components/Panel/component.jsx'

const Collapsible = props => {
  let { label, content, open, modifiers } = props
  let initOpen = open ? {'open': true} : null

  return (
    <details {...initOpen}>
      <summary><span className='summary'>{label}</span></summary>
      <Panel className={modifiers || 'panel-border-narrow'}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </Panel>
    </details>
  )
}

export default Collapsible
