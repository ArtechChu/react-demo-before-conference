import React, { Component } from 'react';
import './App.css';
import Student from './Components/Student/Student';
class App extends Component {

  sayHello=()=>{
    alert("hello.")
  }

  sayHelloTo= (name)=>{
    console.log(this);
    alert("hello:"+name)
  }

  render() {

    return (
      <div className="App">
        <Student />
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
