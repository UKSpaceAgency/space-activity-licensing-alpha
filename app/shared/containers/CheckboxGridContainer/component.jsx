import React from 'react'
import Heading from '../../components/Heading/component.jsx'
import RadioCheck from '../../components/RadioCheck/component.jsx'
import Grid from '../../components/Grid/component.jsx'
import GridCol from '../../components/GridCol/component.jsx'

const CheckboxGridContainer = props => {
  let grids = props.items.map((v, i) => {
    return <RadioCheck {...v} key={i}/>
  })

  return (
    <div><Heading {...props.heading}/>{grids}</div>
  )
}

export default CheckboxGridContainer
