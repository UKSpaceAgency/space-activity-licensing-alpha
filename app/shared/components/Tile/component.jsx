import React from 'react'
import classNames from 'classnames'
import Heading from '../../components/Heading/component.jsx'
import Button from '../../components/Button/component.jsx'
import Grid from '../../components/Grid/component.jsx'
import Divider from '../../components/Divider/component.jsx'
import GridCol from '../../components/GridCol/component.jsx'
import Badge from '../../components/Badge/component.jsx'

const Tile = props => {
  let classes = classNames(props.gridModifier, 'spacing-bottom--single', {
    'column-half': !props.gridModifier
  })
  let id = props.id ? {'id': props.id} : null
  let boxClasses = classNames('box spacing-bottom--large', {
    'relative': props.updates
  })

  let Grids = props.grid.map((val, i) => {
    let mod = (val.gridModifier + ' ' + classes) || classes
    let component

    switch (val.contentType) {
      case 'heading':
        component = <GridCol className={mod} key={i}><Heading {...val} key={i}/></GridCol>
        break
      case 'button':
        component = <GridCol className={mod} key={i}><Button {...val} key={i}/></GridCol>
        break
      case 'divider':
        component = <Divider {...val} key={i}/>
        break
    }
    return component
  })

  return (
    <div className={boxClasses} {...id}>
      {props.updates && <Badge {...props.updates}/>}
      <Heading {...props.heading}/>
      <Grid>
        {Grids}
      </Grid>
    </div>
  )
}
export default Tile
