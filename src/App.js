import React, { Component } from 'react';
import './App.css';

class App extends Component {

  sayHello=()=>{
    alert("hello.")
  }

  sayHelloTo= (name)=>{
    console.log(this);
    alert("hello:"+name)
  }

  render() {
    let content1 = <div>here is content 11111</div>
    let content2 = <div>here is content 22222</div>
    let isShowContent1 = false;
    let liArr = [
      <li key="li1">111</li>,
      <li key="li2">2222</li>,
      <li key="li3">33333</li>
    ];
    return (
      <div className="App">
      {/*这里是注释*/}
        <span htmlFor="here is for attribute">hello react.{1+1}</span>
        {isShowContent1?content1:content2}
        <ul>
          {liArr}
        </ul>
        {/* <button onClick={ ()=> this.sayHelloTo('jack')  }>say hello</button> */}
        <button onClick={  this.sayHelloTo.bind(null,'jack')  }>say hello</button>

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
