# React 入门，based on React.16.4.2
react 官网：https://reactjs.org/

本次教程基于环境、使用工具以及版本：
- nodejs：8.11.3
- react：16.4.2
- npm：6.2.0
- SPA（单页应用）

# 1. 创建项目
## 1.1 - 安装脚手架create-react-app
```javascript
npm install -g create-react-app@2.0.0-next.3e165448
```
## 1.2 - 创建项目
```javascript
create-react-app react-demo
```

## 1.3 - 运行项目
```javascript
npm start
或者
yarn start
```

# 2. 项目结构说明
创建好项目之后的结构目录：
![结构目录](https://images2018.cnblogs.com/blog/1101407/201807/1101407-20180713113305145-1617706627.png)

其中：
- /public/index.html是整个项目的入口文件，我们可以在该文件中添加一些CDN资源，如jQuery等。
  
    index.html文件内容：

    ![](https://images2018.cnblogs.com/blog/1101407/201807/1101407-20180716143525133-52651282.png)

    P.S.：
    - 在index.html中，有一个根容器：id="root"
    - 这个是整个项目的总容器，创建的组件最终都生成在该容器中。
    - 对于该文件，一般情况下，我们不会在这个html文件中增加我们的业务代码


- src/index.js：跟index.html相关联，会将该js中声明的组件渲染到public/index.html中 "id=root" 的容器内
    ![](https://images2018.cnblogs.com/blog/1101407/201807/1101407-20180713144814373-1366441329.png)
    - ReactDOM.render是react最基本的方法，用于将模板转换为HTML语言，并插入到指定的DOM节点。 
    - 像上面的代码的意思就是把App这个组件转换成html后插入到root节点中。
    - 在这里，可以将 <App /> 认为是整个项目的根组件，要使用App组件，需要引入该组件，见L4（第四行）
        - 通过 import App from './App' 进行引用，默认情况下，webpack自动将文件作为js文件进行处理，所以这里在引入App.js的时候，不用显式指明 "./App.js"
  

> 为什么从项目结构中并看不出任何跟webpack相关的文件？
# 3. 项目解包
```javascript
npm run eject
```
项目解包后的入口文件、入口函数图示：
![](https://images2018.cnblogs.com/blog/1101407/201807/1101407-20180716143041900-1455397530.png)
- 解包之后的项目无法通过  npm start 这样的命令直接启动项目（解包的同时会从node_modules中删除包）
- 此时需要运行 npm install 进行安装package.json中定义的包。

# 4. JSX语法
>脚手架创建的react项目中的App.js，默认使用了JSX语法

- 使用JSX语法需要导入 react
- JSX语法与非JSX语法的对比：
![](https://images2018.cnblogs.com/blog/1101407/201807/1101407-20180716141903506-640158671.png)

## Demo
**Demo1 - 在JSX中，通过花括号 {} ，可以使用javascript表达式，如：**
```javascript
  render() {
    return (
      <div className="App">
        <span>hello react.</span>
        <div id="demo">
          1+1={1 + 1} //最终结果:1+1=2
        </div>
      </div>
    );
  }
```

**Demo2 - JSX中无法使用 if-else，但可以使用三元表达式来代替，如：**
```javascript
render() {
  let isDisplayOne = true;
  let one = "i am One";
  let two = "i am Two";
  return (
    <div className="App">
      <span>hello react.</span>
      <div id="demo">
        {isDisplayOne ? one : two} //通过三元表达式代替if-else，如果?号后面的内容过多，建议抽取后通过变量赋值
      </div>
    </div>
  );
}
```

**Demo3 - JSX中，html标签内部的注释需要用花括号括起来，如：**
```javascript
render() {
  return (
    <div className="App">
      <span>hello react.</span>
      <div id="demo">
        {/* <span>test annotation</span> */}
      </div>
    </div>
  );
}
```

**Demo4 - JSX中，使用数组，会将数组中的内容自动按照顺序填充到html标签中，如：**
```javascript
render() {
  let arr = [
      {/*如果要在jsx中使用内联属性元素，则属性值在赋值的时候需要用双花括号括起来。*/}
    <span style={{ color: 'blue' }}>1.hello</span>,
    <span style={{ color: 'yellow' }}>2.world</span>
  ];
  return (
    <div className="App">
      <span>hello react.</span>
      <div id="demo">
        <div>{arr}</div>
      </div>
    </div>
  );
}
```

**Demo5 - 在JSX中，html中的一些元素属性：如class，for，需要使用 className 和 htmlFor 来做代替，如：**
```javascript
render() {
  return (
    <div className="App">
      {/*以下内容最终生成的html为：<span class="testClass" for="using htmlFor">hello react.</span> */}
      <span className="testClass" htmlFor="using htmlFor">hello react.</span>
    </div>
  );
}
```

**Demo6 - jsx中，属性事件**

```javascript
<button onClick="XXXXX">button</button>
这里在定义点击事件的时候，不再是全小写的“onclick”，而是“onClick”--- C 大写。命名上，类似于camel命名
```
使用：
```javascript
假设在声明了如下方法：
//无参方法
sayHello(){
  console.log("say hello");
}
//带参方法
sayHelloTo(name) {
  console.log("hello " + name);
}
通过按钮点击事件使用 sayHello方法
  < div > <button onClick={this.sayHello} >button</button></div >
```
在调用方法的时候，需要注意以下几点：
1. 若调用的方法不带参数，如 sayHello：
    - 若调用时方法上带上了圆括号，如 onClick={this.sayHello()}，则在页面加载的时候，该方法会自动执行一遍。
    - 若调用时没有带圆括号，如 onClick={this.sayHello}，则页面加载的时候，该方法不会自动执行，需要点击该按钮后才会被执行。
2. 若调用的方法带参数，如 sayHelloTo：
    - 若调用方式为：onClick={this.sayHelloTo('Lucy')}，则页面加载的时候，该方法就自动执行，且之后按钮再怎么点击也无效
    - 若想让带参方法不自动执行，方法有两种：
        - 1.通过箭头函数：onClick={()=>this.sayHelloTo("Lucy")}
        - 2.使用bind：onClick={this.sayHelloTo.bind(this,"Lucy")} //第一个参数表示当前指向的对象，这里传的this表示的当前js中定义的class(因为该this是JSX中的this)，第二个参数开始就是调用方法的入参

# 5. 组件：Component
一个简单例子：在src目录中创建如下目录和文件
![](https://images2018.cnblogs.com/blog/1101407/201807/1101407-20180716181108312-525461363.png)
## 5.1 - 创建自定义组件：Student.js
```javascript
Student.js
    import React from 'react'
    function student(props){
        return <div>大家好，我是学生</div>
    }

    export default student;
```

## 5.2 - 在App.js中使用Student组件
```javascript
App.js
    导入组件：import Student from './Components/Student/Student';
    使用组件：
      render() {
        return (
        <div className="App" htmlFor="html for for for demo">
            <Student />
            <Student />
            <Student />
        </div>
        );
    }
```

## 5.3 - 组件中如何传值？
### 5.3.1 - 通过 props
```javascript
Student.js
    import React from 'react'
    function student(props){
        return <div>大家好，我是学生：{props.name},班级：{props.class}</div>
    }

    export default student;
```
```javascript
App.js
  render() {
    return (
      <div className="App" htmlFor="html for for for demo">
        <Student name="A" class="class_1"/>
        <Student name="B" class="class_2"/>
        <Student name="C" class="class_1"/>
      </div>
    );
  }
```
### 5.3.2 - 通过 state
- 什么是 state，如何使用？
    - state是定义在Component中的一个属性，组件必须是class组件继承自Component
定义 state：
```javascript
App.js
    class App extends Component {
        {/*定义state*/}
        state = {
            students:[
            {id:1, name:"John", class:"class_A"},
            {id:2, name:"Steve", class:"class_C"},
            {id:3, name:"Trump", class:"class_A"},
            ]
        }

        render() {
            return (
            <div className="App" htmlFor="html for for for demo">
                <Student name={this.state.students[0].name} class={this.state.students[0].class}/>
                <Student name={this.state.students[1].name} class={this.state.students[1].class}/>
                <Student name={this.state.students[2].name} class={this.state.students[2].class}/>
            </div>
            );
        }
    }
```
如何动态修改数据？
- 通过 this.setState()方法
```javascript
  changeStudent = () => {
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
```
Demo1 - 数据的双向绑定：修改年级信息
```javascript
App.js
1. 增加grade信息容器
2. 增加输入行用于更新grade信息
  class App extends Component {
    state = {
      students: [
        { id: 1, name: "John", class: "class_A" },
        { id: 2, name: "Steve", class: "class_C" },
        { id: 3, name: "Trump", class: "class_A" },
      ],
      gradeInfo:"grade one"  
    }
    ...
    changeGradeInfo = (event)=>{
      this.setState({
        gradeInfo:event.target.value
      })
    }

    render() {
      return (
        <div className="App" htmlFor="html for for for demo">
          <div>{this.state.gradeInfo}</div>
          ...
          <input type="text" onChange={ this.changeGradeInfo}></input>
          <button onClick={this.changeStudent}>修改</button>
        </div>
      );
    }
  }
```

Demo2 - 修改学生姓名
```javascript
App.js
class App extends Component {
  ...
  {/*需要注意下，最后一个参数是event，对应赋值绑定的地方第一个参数*/}
  changeStudentTo = (id,event) => {
    let students = this.state.students;
    let index = students.findIndex(ent=>ent.id===id);
    console.log(index);
    let student = students[index];
    student.name = event.target.value
    students[index] = student;
    this.setState({
      students: students
    });
  }

  render() {
    return (
      <div className="App" htmlFor="html for for for demo">
        <div>{this.state.gradeInfo}</div>
        <Student id={this.state.students[0].id} onChangeStudentTo={this.changeStudentTo} name={this.state.students[0].name} class={this.state.students[0].class} />
        <Student id={this.state.students[1].id} onChangeStudentTo={this.changeStudentTo} name={this.state.students[1].name} class={this.state.students[1].class} />
        <Student id={this.state.students[2].id} onChangeStudentTo={this.changeStudentTo} name={this.state.students[2].name} class={this.state.students[2].class} />
        <input type="text" onChange={ this.changeGradeInfo}></input>
        <button onClick={this.changeStudent}>修改</button>
      </div>
    );
  }
}
```
```javascript
Student.js
  import React from 'react'
  function student(props) {
      return (
          <div>
              <div>大家好，我是学生：{props.name},班级：{props.class}</div>
              <input type="text" onChange={props.onChangeStudentTo.bind(this, props.id)} />
          </div>);
  }
  export default student;
```
>这里需要注意下，react的event和我们平时认为的JS的event不一样，相关文档见此： https://reactjs.org/docs/events.html
- 什么时候用 state？
    - 需要动态改变组建内值的时候
    - 需要使用组件的生命周期函数的时候
