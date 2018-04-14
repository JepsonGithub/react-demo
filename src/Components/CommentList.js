import React from 'react'
import Comment from './Comment'

export default class CommentList extends React.Component {

  constructor( props ) {
    super( props )

    this.state = {
      list: [
        {id:1,name:"张三",content:"沙发.."},
        {id:2,name:"李四",content:"板凳.."},
        {id:3,name:"王五",content:"这个.."},
        {id:4,name:"赵六",content:"那个.."},
        {id:5,name:"钱七",content:"还有.."},
        {id:6,name:"唐八",content:"好吧.."},
        {id:7,name:"马九",content:"还有谁??"},
      ]
    }
  }

  // 公共方法
  ml_createElement() {
    //return this.state.list.map( item => <Comment key={item.id} obj={item} ></Comment> )
    //return this.state.list.map( item => <Comment key={item.id} name={item.name} age={item.age} ></Comment> )
    return this.state.list.map( item => <Comment key={item.id} {...item} ></Comment> )
  }

  render() {
    return (
      <div>
        <h1> 评论列表 </h1>
        <ul>
          {
            this.ml_createElement()
          }
        </ul>
      </div>
    );
  }
}