// 1. 导入 react
import React from 'react'
import ReactDom from 'react-dom'

// 2. 创建组件
import CommentList from '../Components/CommentList'

// 3. 渲染
ReactDom.render( <CommentList></CommentList>, document.getElementById("app") );