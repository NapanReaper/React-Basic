import React from 'react'
import ReactDom from 'react-dom'
import $ from 'jquery'

// function Greeting() {
//   return <h1>Hello World</h1>
// }
const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hello World')
  )
}
ReactDom.render(<Greeting />, document.getElementById('root'))
