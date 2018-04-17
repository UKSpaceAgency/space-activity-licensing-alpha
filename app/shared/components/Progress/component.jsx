import React from 'react'
import classNames from 'classnames'
import ProgressItem from '../ProgressItem/component.jsx'
import Heading from '../Heading/component.jsx'
import { mapper } from '../../utilities'

const Progress = props => {
  let classes = classNames('progress', props.className, props.modifiers)
  let cols = mapper[props.content.length]
  let items = props.content.map((v, i) => {
    return <ProgressItem key={i} className={'column-' + cols} {...v}/>
  })

  return (
    <section className={classes}>
      <Heading {...props.heading}/>
      <ul className='progress__items  grid-row'>
        {items}
      </ul>
    </section>
  )
}

export default Progress
