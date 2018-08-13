import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span>hello react.</span>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return React.createElement('div',{className:'App'}, React.createElement('span',null,'hello react.'))
//   }
// }

export default App;
