import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as Login from './container/Login'

interface Props{}

const App = ({}: Props) => {
  return 
    <>
      <h1> My Fist TypeScript Project! </h1>
      <Login />
    </>
  
}

ReactDom.render(<App />, document.querySelector('#app'))