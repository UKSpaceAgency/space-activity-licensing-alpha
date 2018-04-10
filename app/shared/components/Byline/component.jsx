import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon/component.jsx'
import Time from '../Time/component.jsx'
import Heading from '../Heading/component.jsx'
import Grid from '../Grid/component.jsx'
import GridCol from '../GridCol/component.jsx'
import Notice from '../Notice/component.jsx'

const Byline = props => {
  let classes = classNames('byline column-half', props.className, props.modifiers)

  return (
    <Grid>
      <GridCol className={classes}>
        <Icon {...props.icon} className='icon--byline'/>
        <Heading {...props.name}/>
        <Time {...props.date}/>
      </GridCol>
      {props.priority && <GridCol className='column-half'>
        <Notice {...props.priority}/>
      </GridCol>}
    </Grid>
  )
}

export default Byline
