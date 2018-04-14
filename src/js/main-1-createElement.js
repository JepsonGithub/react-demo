/**
 * Created by Jepson on 2018/4/14.
 */

// 创建组件
// 1. 导入, 组件首字母一般大写
import React from "react"  // 可以创建组件, 有一些其他的 api, 有一些其他的生命周期方法
import ReactDom from "react-dom" // 渲染组件

// 2. 创建  createElement  (React 元素 -> 就是组件 )
// 参数1: 元素的类型
// 参数2: 元素的属性, 如果没有给个 null
// 参数3: 元素的子节点
// ..................
var div = React.createElement('div', {
  title: '哈哈'
}, 'hello react12312321');


// 3. 渲染
// 参数1: 要渲染什么 what
// 参数2: 要渲染到哪里 where
// ReactDom.render( what, where );
ReactDom.render( div , document.getElementById("app") );
