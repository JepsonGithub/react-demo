/**
 * Created by Jepson on 2018/4/14.
 */
import React from 'react'

// 利用对象解构赋值
export default ( { name, content } ) => {
  return (
    <li>
      <h3>评论人: { name }</h3>
      <p>评论内容: { content } </p>
    </li>
  )
}




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



