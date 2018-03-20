import React from 'react'
import Grid from '../../components/Grid/component.jsx'
import GridCol from '../../components/GridCol/component.jsx'
import Heading from '../../components/Heading/component.jsx'
import { mapper } from '../../utilities'

const InfoGrid = props => {

  let cols = mapper[props.grid.length]
  let Grids = props.grid.map((val, i) => {
    return <GridCol key={i} className={'column-' + cols}><Heading {...val} /></GridCol>
  })

  return (
    <Grid>
      {Grids}
    </Grid>
  )
}

export default InfoGrid
