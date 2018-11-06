import React, { Component } from 'react'
import './App.css'
import ImageSlider from './Components/ImageSlider'
import Counter from './Components/Counter'

class App extends Component {
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

export default App
