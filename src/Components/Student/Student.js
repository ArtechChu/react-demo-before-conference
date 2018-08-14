import React from 'react'
function student(props) {
    return (
        <div>
            <div>大家好，我是学生：{props.name},班级：{props.class}</div>
            <input type="text" onChange={props.onChangeStudentTo.bind(this,props.id)}></input>
        </div>);
}
export default student;