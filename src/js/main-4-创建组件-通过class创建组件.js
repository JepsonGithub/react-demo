/**
 * Created by Jepson on 2018/4/14.
 */

// 创建组件
// 1. 导入, 组件首字母一般大写
import React from "react"  // 可以创建组件, 有一些其他的 api, 有一些其他的生命周期方法
import ReactDom from "react-dom" // 渲染组件


// 在 es6 中引入了 class 的概念, 可以更好的实现构造函数的实例继承
// 2. 通过 class 创建组件
// (1) 必须要有一个render函数
// (2) 必须要 return
// (3) 传值的问题, 依然使用的是 props, 只不过需要 this.props
// (4) class 创建出来的组件 是有状态的组件 state 生命周期
// (5) 要使用 state 的话, 要在 构造函数里面进行初始化
// (6) 取值 this.state.name 取值
// (7) 改值: this.setState() --> 页面
// (8) state 作用: 内部使用, 更新页面进行渲染的时候

class Welcome extends React.Component {
  constructor( props ) {
    // 想要在子类中使用 this, 必须先调用父类的构造函数 super()
    // 注意: 不允许在 constructor 里面 state 使用 this.props 取值, 需要通过 constructor 传值
    super( props )
    this.state = {
      name: props.name,
      age: props.age
    }
  }
  render() {
    return (
      <div> 哈哈 { this.state.name } { this.state.age }</div>
    )
  }
}



// 3. 渲染
// 参数1: 要渲染什么 what
// 参数2: 要渲染到哪里 where
// ReactDom.render( what, where );
ReactDom.render( <Welcome name="pp" age="18" ></Welcome> , document.getElementById("app") );
