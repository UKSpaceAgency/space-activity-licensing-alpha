import React from 'react'
import Grid from '../Grid/component.jsx'
import GridCol from '../GridCol/component.jsx'
import Heading from '../Heading/component.jsx'
import classNames from 'classnames'

const OverviewList = props => {
  let classes = classNames('bg-grey spacing-bottom--single', props.className, props.modifiers, 'relative bottom-border bottom-border-' + props.label.class)

  return (
    <section className={classes}>
      <Grid>
        <GridCol className='column-half'>
          <div className='padding-medium'>
            <a href={props.url}><h3 className='heading-medium spacing-top--flush'>{props.status && <span className='badge bg-black'>{props.status} </span>} {props.heading.text}</h3></a>
            <p><b>{props.name}</b>: {props.applicantName}</p>
          </div>
        </GridCol>
        <GridCol className='column-quarter'>
          <div className='padding-medium'>
            <p>Last updated<br/><b>{props.updated}</b></p>
            <p>By: <b>{props.updater}</b></p>
          </div>
        </GridCol>
        <GridCol className='column-quarter'>
          <div className='padding-medium'>
            <p>Application status</p>
            <b>{props.appStatus}</b>
          </div>
        </GridCol>
      </Grid>
      <span className={'badge badge--fixed ' + props.label.class}>{props.label.tag}</span>
    </section>
  )
}

export default OverviewList
