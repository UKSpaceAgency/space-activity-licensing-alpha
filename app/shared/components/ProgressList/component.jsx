import React from 'react'
import Heading from '../Heading/component.jsx'
import Longform from '../Longform/component.jsx'
import Grid from '../Grid/component.jsx'
import Divider from '../Divider/component.jsx'

const ProgressList = props => {
  let items = props.list.map((v, i) => {
    return (
      <Grid key={i} className='column-three-quarters'>
        <Divider />
        <div className='media spacing--single'>
          <div className='media__item circled circled--blue ml-4'><span>{v.index}</span></div>
          <div className='media__content'>
            <Heading {...v.heading} />
            <Longform {...v.content}/>
          </div>
        </div>
      </Grid>
    )
  })

  return (
    <section className='grid-row'>
      {items}
    </section>
  )
}

export default ProgressList
