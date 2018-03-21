import React from 'react'
import List from '../../components/List/component.jsx'
import Heading from '../../components/Heading/component.jsx'
import { isArray } from '../../utilities'

const SidenavContainer = props => {
  // quick hygiene thing to ensure React hasn't done something weird
  let flattened = isArray(props.content) ? props.content : Object.values(props.content)
  let list = flattened.map((v, i) => {
    return {
      'text': v.title.text,
      'url': '#' + v.permalink
    }
  })

  return (
    <div className={props.modifiers || ''}>
      {props.sideNavHeading && <Heading {...props.sideNavHeading}/>}
      <List list={list} className='quiet font-xsmall'/>
    </div>
  )
}

export default SidenavContainer
