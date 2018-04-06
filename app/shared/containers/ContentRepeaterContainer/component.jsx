import React from 'react'
import ContentRepeater from '../../components/ContentRepeater/component.jsx'
import Heading from '../../components/Heading/component.jsx'

const ContentRepeaterContainer = props => {
  let content = props.content.map((v, i) => {
    return <ContentRepeater {...v} key={i} id={i}/>
  })

  return (
    <div className={props.modifiers || ''}>
      {props.heading && <Heading {...props.heading}/>}
      {content}
    </div>
  )
}

export default ContentRepeaterContainer
