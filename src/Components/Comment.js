/**
 * Created by Jepson on 2018/4/14.
 */
import React from 'react'

const styles = {
  // fontSize 可以继承
  liStyle : { backgroundColor:'skyblue', padding:5, marginBottom: 10, fontSize: 100 },
  h3Style: { color: 'pink', fontSize: 50 }
}


// 利用对象解构赋值
export default ( { name, content } ) => {
  return (
    <li style={ styles.liStyle }>
      <h3 style={ styles.h3Style }>评论人: { name }</h3>
      <p style={ { color: 'yellow' } }>评论内容: { content } </p>
    </li>
  )
}

// 添加样式
// 1. 行内样式
// 2. 抽离为对象形式
// 3. 外联样式, 前面两种太麻烦了, 我们可以定义在css文件中, 通过 import 导入即可




//export default class Comment extends React.Component {
//  constructor( props ) {
//    super( props )
//
//    this.state = {
//      //name: props.name,
//      //content: props.content,
//
//      // 也可以直接传对象
//      obj: props.obj
//    }
//  }
//
//  render() {
//    return (
//      <li>
//        <h3>评论人: { this.state.obj.name }</h3>
//        <p>评论内容: { this.state.obj.content } </p>
//      </li>
//    )
//  }
//}



