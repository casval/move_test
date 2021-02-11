import React from 'react'
import ReactDom from 'react-dom'

const App = () => {
  return <h1> My First React Project! </h1>
}

ReactDom.render(<App />, document.getElementById('app'))