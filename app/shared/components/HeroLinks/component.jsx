import React from 'react'
import List from '../../components/List/component.jsx'
import Heading from '../../components/Heading/component.jsx'

const HeroLinks = props => {
  return (
    <div className='hero-links'>
      <Heading {...props.heading}/>
      <List {...props.links} />
      {props.notice && <Heading {...props.notice}/>}
    </div>
  )
}
export default HeroLinks
