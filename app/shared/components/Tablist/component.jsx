import React from 'react'

const Tablist = props => {

  return (
    <ul role="tablist">
        <li role="presentation">
            <a id="foo-tab" href="#foo" role="tab" aria-controls="foo" aria-selected="true">Foo</a>
        </li>

        <li role="presentation">
            <a id="bar-tab" href="#bar" role="tab" aria-controls="bar">Bar</a>
        </li>

        <li role="presentation">
            <a id="qux-tab" href="#qux" role="tab" aria-controls="qux">Qux</a>
        </li>
    </ul>
  )
}

export default Tablist
