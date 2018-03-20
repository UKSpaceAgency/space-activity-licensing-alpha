import React from 'react'
import Panel from '../../components/Panel/component.jsx'

const Collapsible = props => {
  let { label, content, open, modifiers, panelModifiers } = props
  let initOpen = open ? {'open': true} : null

  return (
    <details {...initOpen} className={modifiers || null}>
      <summary><span className='summary'>{label}</span></summary>
      <Panel className={panelModifiers || 'panel-border-narrow'}>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </Panel>
    </details>
  )
}

export default Collapsible
