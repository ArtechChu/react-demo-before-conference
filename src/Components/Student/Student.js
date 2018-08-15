import React from 'react'
import './Student.css'

var myStyle = {
    color:"orange",
    fontSize:"22px"
}

function student(props) {

    return (
        <div>
            <div style={myStyle}>大家好，我是学生：{props.name},班级：{props.class}</div>
            <input type="text" onChange={(e)=>props.onChangeStudentTo(props.id,e)}></input>
            <input type="text" onChange={props.onChangeStudentTo.bind(null,props.id)} defaultValue="bind"></input>
        </div>);
}
export default student;