import React from 'react'
import ReactDom  from 'react-dom'

function Greeting(){
  return <h1>This is my first Component</h1>
}
ReactDom.render(<Greeting/>,document.getElementById('root'))