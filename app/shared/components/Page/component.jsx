import React from 'react'
import Masthead from '../Masthead/component.jsx'
import Footer from '../../components/Footer/component.jsx'
import Breadcrumb from '../../components/Breadcrumb/component.jsx'
import Hero from '../../components/Hero/component.jsx'

const Page = props => {
  return (
    <React.Fragment>
      <Masthead {...props.masthead}/>
      {props.hero && <Hero {...props.hero} />}
      {!props.hero && <div id='global-header-bar' />}
      <div className='site-wrapper'>
        <main id='content' role='main'>
          {props.breadcrumb && <Breadcrumb breadcrumb={props.breadcrumb} />}
          {props.components}{props.children}
        </main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Page
