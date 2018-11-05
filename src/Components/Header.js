import React from 'react'
import logo from './../logo.svg'
import { Body, Body2 } from './Body';


export class Header extends React.Component {
  render () {
    return (
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          {this.props.title}
          {this.props.num}
          {this.props.myArr[0]}
          {JSON.stringify(this.props.myObj)}
          {this.props.myFunc(100, 10)}
        </div>
        <Body text={'text from body function.'} text2='Test' />
        <Body2 />
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
