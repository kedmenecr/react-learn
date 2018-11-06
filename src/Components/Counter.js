import React from 'react'

export default class Counter extends React.Component {
  state = {
    count: 0
  }

  componentWillMount () {
    console.log('mouting..')
  }
  componentWillUnmount () {
    console.log('unmounting')
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
