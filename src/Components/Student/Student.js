import React from  'react' //如果要用到JSX语法，就需要导入react
import './Student.css';
var myStyle = {
    "fontSize":"22px",
    "color":"black"
}
function Student(){
    return <p style={myStyle}>大家好，我是学生A</p> //JSX
}
export default Student;