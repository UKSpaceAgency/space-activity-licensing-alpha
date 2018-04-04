import React from 'react'
import ContentRepeater from '../../components/ContentRepeater/component.jsx'

const ContentRepeaterContainer = props => {
  let content = props.content.map((v, i) => {
    return <ContentRepeater {...v} key={i} id={i}/>
  })

  return (
    <div className={props.modifiers || ''}>
      {content}
    </div>
  )
}

export default ContentRepeaterContainer
