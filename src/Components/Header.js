import React from 'react'
import { Body, Body2 } from './Body'
import Counter from './Counter'

export class Header extends React.Component {
  render () {
    return (
      <header className='App-header'>
        <Counter initialValue={2} />
        <Counter initialValue={4} />
        <Counter initialValue={6} />
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
