import React from 'react'
import Masthead from '../Masthead/component.jsx'
import Footer from '../Footer/component.jsx'
import Breadcrumb from '../Breadcrumb/component.jsx'
import Hero from '../Hero/component.jsx'
import Grid from '../Grid/component.jsx'
import GridCol from '../GridCol/component.jsx'
import OverviewList from '../OverviewList/component.jsx'
import FilterBlock from '../../containers/FilterBlock/component.jsx'

const PageTwoCol = props => {
  let list = props.listing.map((v, i) => {
    return <OverviewList {...v} key={i}/>
  })

  return (
    <div>
      <Masthead />
      <div id='global-header-bar' />
      <div className='site-wrapper'>
        <main id='content' role='main'>
          <Breadcrumb breadcrumb={props.breadcrumb} />
          <Hero {...props.hero} />
          <FilterBlock {...props}/>
          <Grid>
            <GridCol className='column-full'>
              {list}
            </GridCol>
          </Grid>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default PageTwoCol
