import React from 'react'
import Grid from '../../components/Grid/component.jsx'
import GridCol from '../../components/GridCol/component.jsx'
import Tile from '../../components/Tile/component.jsx'
import { mapper } from '../../utilities'

const Listing = props => {
  let cols = mapper[props.columns]
  let Grids = props.content.map((val, i) => {
    val.gridModifier = props.gridModifier || null
    return <GridCol key={i} className={'column-' + cols}><Tile {...val} /></GridCol>
  })

  return (
    <Grid>
      {Grids}
    </Grid>
  )
}
export default Listing
