import React, { Component } from 'react'
import ImageSlider from './Components/ImageSlider'
import Counter from './Components/Counter'
export class App1 extends Component {
  state = {
    visible: true
  }
  render () {
    const buttonText = this.state.visible ? 'hide' : 'show'
    const slider = this.state.visible ? <ImageSlider /> : <Counter />
    return (
      <div>
        {slider}
        <button
          onClick={() => {
            this.setState({
              visible: !this.state.visible
            })
          }}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}
