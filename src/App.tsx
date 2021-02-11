import * as React from 'react'
import * as ReactDom from 'react-dom'

interface Props{}

const App = ({}: Props) => {
  return <h1> My Fist TypeScript Project! </h1>
}

ReactDom.render(<App />, document.querySelector('#app'))