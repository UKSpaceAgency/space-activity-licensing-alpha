import React from 'react'
import classNames from 'classnames'
import Heading from '../Heading/component.jsx'
import Button from '../Button/component.jsx'
import Grid from '../Grid/component.jsx'
import Divider from '../Divider/component.jsx'
import Notice from '../Notice/component.jsx'
import Longform from '../Longform/component.jsx'
import GridCol from '../GridCol/component.jsx'
import Badge from '../Badge/component.jsx'
import Icon from '../Icon/component.jsx'

const Tile = props => {
  let wrapper = classNames(props.completion ? props.completion.modifiers : null, {
    'bordered': props.completion,
    'spacing-bottom--large': props.completion
  })
  let classes = classNames(props.gridModifier, 'spacing-bottom--single', {
    'column-half': !props.gridModifier
  })
  let id = props.id ? {'id': props.id} : null
  let boxClasses = classNames('box', props.modifiers, {
    'spacing-bottom--large': !props.completion,
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
    <div className={wrapper}>
      <div className={boxClasses} {...id}>
        {props.updates && <Badge {...props.updates}/>}
        <Heading {...props.heading}/>
        {props.summary && <Longform {...props.summary}/>}
        {props.notice && <Notice {...props.notice}/>}
        <Grid>
          {Grids}
        </Grid>
      </div>
      {props.completion && <GridCol className='column-quarter spacing-top--single has-state'>{props.completion.icon && <Icon {...props.completion.icon}/>}<Heading {...props.completion.heading}/><Heading {...props.completion.comment}/>{props.completion.action && <Button {...props.completion.action}/>}</GridCol>}
    </div>
  )
}
export default Tile
