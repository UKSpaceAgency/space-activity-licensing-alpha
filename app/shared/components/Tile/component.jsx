import React from 'react'
import classNames from 'classnames'
import Heading from '../../components/Heading/component.jsx'
import Button from '../../components/Button/component.jsx'
import Grid from '../../components/Grid/component.jsx'
import GridCol from '../../components/GridCol/component.jsx'

const Tile = props => {
  let classes = classNames(props.gridModifier, 'spacing-bottom--single', {
    'column-half': !props.gridModifier
  })

  let Grids = props.grid.map((val, i) => {
    let block = val.contentType === 'heading' ? <Heading {...val} /> : <Button {...val} />
    return <GridCol className={classes} key={i}>{block}</GridCol>
  })

  return (
    <div className='box spacing-bottom--single'>
      <Heading {...props.heading}/>
      <Grid>
        {Grids}
      </Grid>
    </div>
  )
}
export default Tile
