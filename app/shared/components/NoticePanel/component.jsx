import React from 'react'
import classNames from 'classnames'
import Title from '../../components/Title/component.jsx'
import Heading from '../../components/Heading/component.jsx'

const NoticePanel = props => {
  let classes = classNames('notice-panel', props.className, props.modifiers)

  return (
    <section className={classes}>
      {props.title && <Title {...props.title}/>}
      {props.heading && <Heading {...props.heading}/>}
    </section>
  )
}
export default NoticePanel
