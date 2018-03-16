import React from 'react'
import Heading from './components/Heading/component.jsx'
import Fieldset from './components/Fieldset/component.jsx'

const formBuilder = formItems => {
  let components = []

  for (let i = 0; i < formItems.length; i++) {
    let item = formItems[i]
    let component

    switch (item.contentType) {
      case 'fieldSet':
        component = <Fieldset {...item} key={i} />
        break
      case 'formGroup':
        component = <FormGroup {...item} key={i} />
        break
      case 'heading':
        component = <Heading {...item} key={i} />
        break
      default:
        console.error('Could not match ' + item.contentType)
        continue
    }
    components.push(component)
  }
  return components
}

export default formBuilder
