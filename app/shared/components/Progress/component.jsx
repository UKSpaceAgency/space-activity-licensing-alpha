import React from 'react'
import ProgressItem from '../ProgressItem/component.jsx'
import Heading from '../Heading/component.jsx'

const Progress = props => {
  let items = props.content.map((v, i) => {
    return <ProgressItem key={i} {...v}/>
  })

  return (
    <section className='progress'>
      <Heading {...props.heading}/>
      <ul className='progress__items  grid-row'>
        {items}
      </ul>
    </section>
  )
}

export default Progress
