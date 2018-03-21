import React from 'react'
import Blockquote from './components/Blockquote/component'
import Longform from './components/Longform/component'
import Title from './components/Title/component'
import Hero from './components/Hero/component'
import Form from './components/Form/component'
import List from './components/List/component'
import Heading from './components/Heading/component.jsx'
import Collapsible from './components/Collapsible/component.jsx'
import Panel from './components/Panel/component.jsx'
import Notice from './components/Notice/component.jsx'
import Listing from './components/Listing/component.jsx'
import InfoGrid from './components/InfoGrid/component.jsx'
// import { stringContains } from './utilities'

export function pageBuilder (pageData) {
  let contentItems = pageData.content

  if (!contentItems || contentItems.length === 0) {
    return
  }

  let reactComponents = []

  if (!contentItems) {
    return null
  }

  for (let i = 0; i < contentItems.length; i++) {
    let item = contentItems[i]
    let reactComponent

    switch (item.contentType) {
      case 'title':
        reactComponent = <Title {...item} key={i} />
        break
      case 'hero':
        reactComponent = <Hero {...item} key={i} />
        break
      case 'blockquote':
        reactComponent = <Blockquote {...item} key={i} />
        break
      case 'panel':
        reactComponent = <Panel {...item} key={i} />
        break
      case 'infoGrid':
      console.log(item)
        reactComponent = <InfoGrid {...item} key={i} />
        break
      case 'list':
        reactComponent = <List {...item} key={i} />
        break
      case 'heading':
        reactComponent = <Heading {...item} key={i} />
        break
      case 'collapsible':
        reactComponent = <Collapsible {...item} key={i} />
        break
      case 'form':
        reactComponent = <Form {...item} key={i} />
        break
      case 'notice':
        reactComponent = <Notice {...item} key={i} />
        break
      case 'longform':
        reactComponent = <Longform {...item} key={i} />
        break
      case 'listing':
        reactComponent = <Listing {...item} key={i} />
        break
      default:
        console.error('Could not match ' + item.contentType)
        continue
    }
    reactComponents.push(reactComponent)
  }
  return reactComponents
}
