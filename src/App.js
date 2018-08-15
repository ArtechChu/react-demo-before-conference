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
    ],
    gradeInfo:"grade one",
    isShowGradeInfo:true
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

  changeStudentTo = (id,e1) => {

    let students = this.state.students;
    let index = students.findIndex(ent=>ent.id===id);
    console.log(index);
    let student = students[index];
    student.name = e1.target.value
    students[index] = student;
    this.setState({
      students: students
    });
  }



  changeGradeInfo = (e)=>{
    this.setState({
      gradeInfo:e.target.value
    })
  }



  render() {
    let gradeInfo = null;
    if(this.state.isShowGradeInfo){
      gradeInfo = this.state.gradeInfo;
    }
    var studentArray = [];
    for(let i=0;i<this.state.students.length;i++){        
        studentArray.push(<Student id={this.state.students[i].id} onChangeStudentTo={this.changeStudentTo} name={this.state.students[i].name} class={this.state.students[i].class} />)
    }
    return (
      <div className="App" htmlFor="html for for for demo">

        <div>{gradeInfo}</div>

        {/* {studentArray} */}
        {this.state.students.map(student=>{
          return <Student id={student.id} onChangeStudentTo={this.changeStudentTo} name={student.name} class={student.class} />
        })}
        <input type="text" onChange={ this.changeGradeInfo}></input>
        <button onClick={this.changeStudent}>修改</button>
      </div>
    );
  }
}




export default App;
