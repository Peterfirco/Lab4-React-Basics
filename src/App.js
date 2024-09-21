import logo from './logo.svg';
import React, {Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import axios from 'axios';
import './App.css';

class App extends Component
{
  handleClick()
  {
    //console.log('done!')
    axios.get('https://api.github.com/users/maecapozzi')
    .then(Response => {
      console.log(Response);
      this.setState({id:Response.data.id});
    })
    
  }
  constructor()
  {
    super();
    this.state = {
      id: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render()
  {
    return(
    <div className='button_container'>
      <button className='button' onClick={this.handleClick}>push me</button>
      <p>{this.state.id}</p>
    </div>)
  }
}



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
