/**
 * Created by Jepson on 2018/4/14.
 */

// 创建组件
// 1. 导入, 组件首字母一般大写
import React from "react"  // 可以创建组件, 有一些其他的 api, 有一些其他的生命周期方法
import ReactDom from "react-dom" // 渲染组件


// 2. JSX 创建组件的方式
// (2) 函数创建组件
/*
* 1. 用构造函数创建的组件 函数名就是组件名
* 2. 首字母要大写, 在 render 里面就可以使用 该组件了
* 3. 如果没有 return 会报错, 如果真的没东西 return null
* 4. 注意不能换行, 但是如果想换行, 可以将所有结构用 () 包起来
* 5. jsx 只认一个根节点, 有且只有一个
* 6. 自定义属性 html JSX data- 即可
* 7. 特殊 2 个, 和 js 中的 关键字 for 和 class 冲突
*    class --> className
*    for -->  htmlFor
* 8. 注释, { 里面js 的多行注释 }
* */
//function Welcome() {
//  //return null;
//  return (
//    <div>
//      { /* 我是单行注释 */ }
//      <p data-title="456">123</p>
//      /* 我是多行注释 */
//      <div title="哈哈" className="boy">哥哥</div>
//
//      <label for="txt" htmlFor="txt">嘎嘎</label>
//      <input type="text" id='txt'/>
//    </div>
//  );
//}

const Welcome = ( props ) => {
  /*
  * 1. props 是以对象的方式进行传递的
  * 2. 取值 props.name 等
  * 3. props 是只读的, 所有的React组件必须像纯函数那样使用它们的props。
  * 4. {} 里面可以方基本类型和 复杂类型的 js 表达式, 但是: 不能使用 for 和 if
  *    for 用 map 代替
  *    if  用 三目运算符 代替
  * 5. props 主要用来传递值的 ( 组件内传值, 或者 父子组件之间传值 )
  * */
  console.log(props);
  props.name = 789;
  //return null;
  return (
    <div>
      { /* 我是单行注释 */ }
      <p data-title="456">123</p>
      {/*
        我是多行注释
        123
       */}
      <div title="哈哈" className="boy">{ props.name + '------' }</div>
      <label for="txt" htmlFor="txt">用户名</label>
      <input type="text" id='txt'/>
    </div>
  );
}



// 3. 渲染
// 参数1: 要渲染什么 what
// 参数2: 要渲染到哪里 where
// ReactDom.render( what, where );
ReactDom.render( <Welcome name="pp" age="18" ></Welcome> , document.getElementById("app") );
