import React from 'react'
import classNames from 'classnames'
import Breadcrumb from '../../components/Breadcrumb/component.jsx'
import InfoGrid from '../../components/InfoGrid/component.jsx'
import Title from '../../components/Title/component.jsx'
import Longform from '../../components/Longform/component.jsx'
import Collapsible from '../../components/Collapsible/component.jsx'
import Grid from '../../components/Grid/component.jsx'
import GridCol from '../../components/GridCol/component.jsx'
import Heading from '../../components/Heading/component.jsx'
import HeroLinks from '../../components/HeroLinks/component.jsx'
import CheckboxGridContainer from '../../containers/CheckboxGridContainer/component.jsx'

const Hero = props => {
  let classes = classNames('hero', props.className, props.modifiers)

  return (
    <div className={classes}>
      <div className='hero-intro' id='intro'>
        {props.breadcrumb && <Breadcrumb breadcrumb={props.breadcrumb} className='breadcrumbs--inverse'/>}
        <Grid className='relative'>
          {props.licenceType && <GridCol className={props.heroLinks ? 'column-half' : 'column-full'}><InfoGrid grid={props.licenceType}/></GridCol>}
          {props.title && <GridCol className='column-three-quarters'><Title {...props.title}/></GridCol>}
          {props.infoGrid && <GridCol className={props.heroLinks ? 'column-three-quarters' : 'column-full'}><InfoGrid grid={props.infoGrid}/></GridCol>}
          {props.synopsis && <GridCol className='column-three-quarters'><Longform {...props.synopsis}/></GridCol>}
          {props.synopsisCollapsible && <GridCol className='column-three-quarters'><Collapsible {...props.synopsisCollapsible}/></GridCol>}
          {props.heading && <GridCol className='column-three-quarters'><Heading {...props.heading}/></GridCol>}
          {props.licenceTypeGrid && <GridCol className='column-three-quarters'><CheckboxGridContainer {...props.licenceTypeGrid}/></GridCol>}
          {props.heroLinks && <HeroLinks {...props.heroLinks}/>}
        </Grid>
      </div>
    </div>
  )
}
export default Hero
