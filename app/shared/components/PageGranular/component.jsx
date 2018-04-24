import React from 'react'
import Masthead from '../Masthead/component.jsx'
import Footer from '../Footer/component.jsx'
import Breadcrumb from '../Breadcrumb/component.jsx'
import Button from '../Button/component.jsx'
import Hero from '../Hero/component.jsx'
import Grid from '../Grid/component.jsx'
import GridCol from '../GridCol/component.jsx'
import SidenavContainer from '../../containers/SidenavContainer/component.jsx'
import ContentRepeaterContainer from '../../containers/ContentRepeaterContainer/component.jsx'

const PageGranular = props => {
  return (
    <React.Fragment>
      <Masthead {...props.masthead}/>
      <div id='global-header-bar' />
      <div className='site-wrapper'>
        <main id='content' role='main'>
          <Breadcrumb breadcrumb={props.breadcrumb} />
          <Hero {...props.hero} />
          <Grid>
            <GridCol className='column-one-third'>
              <SidenavContainer {...props}/>
            </GridCol>
            <GridCol className='column-two-thirds'>
              <ContentRepeaterContainer {...props}/>
              <Button>Complete</Button>
            </GridCol>
          </Grid>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default PageGranular
