import React from 'react'
import GridCol from '../../components/GridCol/component.jsx'
import Select from '../../components/Select/component.jsx'
import { isArray } from '../../utilities'

const FilterBlock = props => {
  let flattened = isArray(props.filters) ? props.filters : Object.values(props.filters)

  let grids = flattened.map((v, i) => {
    return <GridCol className='column-half'><Select {...v} /></GridCol>
  })

  return (
    <div>{grids}</div>
  )
}

export default FilterBlock
