import React from 'react'
import classNames from 'classnames'
import List from '../../components/List/component.jsx'
import Heading from '../../components/Heading/component.jsx'
import { isArray } from '../../utilities'

const SidenavContainer = props => {
  let flattened = isArray(props.content) ? props.content : Object.values(props.content)
  let classes = classNames('spacing-top--single font-xsmall', {
    'list--indented': props.sideNavHeading && !props.sideNavHeading.flush
  })
  let list = flattened.map((v, i) => {
    return {
      'text': v.title.text,
      'url': '#' + v.permalink,
      'modifiers': v.title.update ? 'update' : null
    }
  })

  return (
    <div className={props.modifiers || ''}>
      {props.sideNavHeading && <Heading {...props.sideNavHeading}/>}
      <List list={list} className={classes}/>
    </div>
  )
}

export default SidenavContainer
