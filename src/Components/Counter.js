import React from 'react'

export default class Counter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      count: props.initialValue ? props.initialValue : 3
    }
  }

  handleClick = e => {
    if (e.target.innerHTML === 'increment') {
      this.setState({
        count: this.state.count + 1
      })
    } else {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  // handleClick = () =>{

  // }

  render () {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleClick}>increment</button>
        <button onClick={this.handleClick}>decrement</button>
      </div>
    )
  }
}
