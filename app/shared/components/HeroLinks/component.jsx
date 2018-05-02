import React from 'react'
import classNames from 'classnames'
import List from '../List/component.jsx'
import Heading from '../Heading/component.jsx'

const HeroLinks = props => {
  let classes = classNames('hero-links', props.modifiers)

  return (
    <div className={classes}>
      <Heading {...props.heading}/>
      <List {...props.links} />
      {props.notice && <Heading {...props.notice}/>}
    </div>
  )
}
export default HeroLinks
