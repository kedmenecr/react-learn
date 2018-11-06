import React from 'react'
import './App.css'
// import { App } from './App.1';
import Counter from './Components/Counter'

export class App extends React.Component {
	handleToggle = () => {
		if(this.state.visible){
			this.setState({
				visible : false
			}) 
		} else {
			this.setState({
				visible: true
			})
		}
	}
	state = {
    visible: true
  }
  render () {
    return (
      <div>
        <div className={this.state.visible ? 'show' : 'hidden'}>
          <Counter />
        </div>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    )
  }
}

export default App
