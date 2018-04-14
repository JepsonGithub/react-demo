/**
 * Created by Jepson on 2018/4/14.
 */

// 创建组件
// 1. 导入, 组件首字母一般大写
import React from "react"  // 可以创建组件, 有一些其他的 api, 有一些其他的生命周期方法
import ReactDom from "react-dom" // 渲染组件


// 2. JSX 创建组件的方式
// (1) JSX 创建组件, 用 () 将结构包起来, 单独创建
// (2) 函数创建( 无状态的组件 ), 可以通过 state 更新状态
// (3) class创建( 有状态的组件 )  state

// 底层还是将 JSX 写的语法结构, 转换成 js 对象, 它通过调用 React.createElement 创建元素对象
// 再转换成虚拟 dom 树, 最后通过 diff 算法来进行解析

// JSX  ->  createElement  ->  虚拟 dom 树
var div = (
  <div title="哈哈">
    hello react
  </div>
)



// 3. 渲染
// 参数1: 要渲染什么 what
// 参数2: 要渲染到哪里 where
// ReactDom.render( what, where );
ReactDom.render( div , document.getElementById("app") );
