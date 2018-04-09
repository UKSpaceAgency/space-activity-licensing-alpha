import React from 'react'
import Grid from '../../components/Grid/component.jsx'
import GridCol from '../../components/GridCol/component.jsx'
import Select from '../../components/Select/component.jsx'
import { mapper } from '../../utilities'

const FilterBlock = props => {
  let cols = mapper[props.blocks.length]
  let grids = props.blocks.map((v, i) => {
    return <GridCol key={i} className={'column-' + cols}><Select {...v} key={i}/></GridCol>
  })

  return (
    <Grid className='spacing-bottom--single'>{grids}</Grid>
  )
}

export default FilterBlock
