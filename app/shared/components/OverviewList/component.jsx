import React from 'react'
import Grid from '../Grid/component.jsx'
import GridCol from '../GridCol/component.jsx'
import Heading from '../Heading/component.jsx'
import classNames from 'classnames'

const OverviewList = props => {
  let classes = classNames('bg-grey spacing-bottom--single', props.className, props.modifiers)

  return (
    <section className={classes}>
      <Grid>
        <GridCol className='column-half'>
          <div className='padding-medium'>
            <a href={props.url}>{props.status && <span className='badge bg-black'>{props.status} </span>}<Heading {...props.heading}/></a>
            <p>{props.name}: {props.applicantName}</p>
            <span className={'badge badge-fixed ' + props.label.class}>{props.label.tag}</span>
          </div>
        </GridCol>
        <GridCol className='column-quarter'>
          <p>Last updated<br/>{props.updated}</p>
          <p>By: {props.updater}</p>
        </GridCol>
        <GridCol className='column-quarter'>
          <p>Application status</p>
          {props.appStatus}
        </GridCol>
      </Grid>
    </section>
  )
}

export default OverviewList
