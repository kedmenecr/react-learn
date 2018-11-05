import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const Body = () => (
  <div>
    Some text from function jsx{' '}
  </div>
)

class Header extends Component {
  render () {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          {this.props.title}
        </p>
        <p>
          {this.props.num}
        </p>
        <p>
          {this.props.myArr[0]}
        </p>
        <p>
          {JSON.stringify(this.props.myObj)}
        </p>
				<p>
					{this.props.myFunc(100,10)}
				</p>
        <Body />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    )
  }
}

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
