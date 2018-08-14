import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Components/Student/Student';
//JSX语法
class App extends Component {

  state = {
    students: [
      { id: 1, name: "John", class: "class_A" },
      { id: 2, name: "Steve", class: "class_C" },
      { id: 3, name: "Trump", class: "class_A" },
    ]
  }
  sayHello = () => {
    alert("hello");
  }
  sayHelloTo = (name) => {
    alert("hello  " + name);
  }

  changeStudent = () => {
    this.setState({
      students: [
        { id: 1, name: "John_______", class: "class_A" },
        { id: 2, name: "Steve", class: "class_C" },
        { id: 3, name: "Trump", class: "class_A" },
      ]
    });
  }

  changeStudent = (name) => {
    this.setState({
      students: [
        { id: 1, name: "John_______", class: "class_A" },
        { id: 2, name: "Steve", class: "class_C" },
        { id: 3, name: "Trump", class: "class_A" },
      ]
    });
  }

  render() {
    return (
      <div className="App" htmlFor="html for for for demo">
        <Student name={this.state.students[0].name} class={this.state.students[0].class} />
        <Student name={this.state.students[1].name} class={this.state.students[1].class} />
        <Student name={this.state.students[2].name} class={this.state.students[2].class} />
        
        <button onClick={this.changeStudent}>修改</button>
      </div>
    );
  }


}




export default App;
