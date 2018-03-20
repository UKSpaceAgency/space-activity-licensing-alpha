import React from 'react'
import GridCol from '../../components/GridCol/component.jsx'
import Select from '../../components/Select/component.jsx'
import { isArray, mapper } from '../../utilities'

const FilterBlock = props => {
  let flattened = isArray(props.filters) ? props.filters : Object.values(props.filters)
  let cols = mapper[flattened.length]
  let grids = flattened.map((v, i) => {
    return <GridCol key={i} className={'column-' + cols}><Select {...v}  key={i}/></GridCol>
  })

  return (
    <div>{grids}</div>
  )
}

export default FilterBlock
