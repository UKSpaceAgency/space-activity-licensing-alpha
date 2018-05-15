import React from 'react'
import Masthead from '../Masthead/component.jsx'
import Footer from '../Footer/component.jsx'
import Breadcrumb from '../Breadcrumb/component.jsx'
import Hero from '../Hero/component.jsx'
import Banner from '../Banner/component.jsx'
import Spinner from '../Spinner/component.jsx'
import AccentBar from '../AccentBar/component.jsx'

const Page = props => {
  return (
    <React.Fragment>
      {props.spinner && <Spinner {...props.spinner}/>}
      <Masthead {...props.masthead}/>
      {props.hero && <React.Fragment><Banner className='phase-banner--top-border' {...props.banner}/><Hero {...props.hero} /></React.Fragment>}
      {!props.hero && <React.Fragment><div id='global-header-bar' /><Banner {...props.banner}/></React.Fragment>}
      {props.license && <AccentBar {...props.license}/>}
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
