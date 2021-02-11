import React from 'react'
import ReactDom from 'react-dom'
import Login from './container/Login.jsx'
import { createStore, applyMiddleware} from 'redux'
import reducer from './reducer/user'
import promiseMiddleware from './middleware/promiseMiddleware'
import { Provider } from 'react-redux'
import store from './store/configureStore'

console.log(reducer)

// const store = createStore(reducer, applyMiddleware(promiseMiddleware))

const App = () => {
  return (
    <>
      <h1> My First React Project! </h1>
      <Provider store={store()}>
        <Login />
      </Provider>
    </>
  )
}

ReactDom.render(<App />, document.getElementById('app'))