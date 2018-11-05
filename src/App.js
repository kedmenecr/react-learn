import React, { Component } from 'react'
import { Header } from './Components/Header'
import './App.css'

class App extends Component {
  render () {
    const add = (a, b) => a + b
    return (
      <div className='App'>
        <Header
          title='Hello from App'
          num={5}
          myObj={{
            a: 5,
            b: 6
          }}
          myArr={[1, 2, 3, 4, 5]}
          myFunc={add}
        />
      </div>
    )
  }
}

export default App
