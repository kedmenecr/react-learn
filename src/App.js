import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Body = () =>(
	<div>
		Some text from function jsx 
	</div>
)

class Header extends Component {
	render(){
		return(
			<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi <code>src/App.js</code> and save to reload.
          </p>
					<Body/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
		)
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
				<Header/>
      </div>
    );
  }
}

export default App;
