// 引入依赖
import React,{Component} from "react"
// 引入css样式
import "../src/App.css"
// 编写类组件
export default class App extends Component{
  render(){
    let titles = ["Pull request","Issues","Marketplace","Explore"]
    return <div>
      <ul>
        {titles.map((v,i)=><li key={i}>{v}</li>)}
      </ul>
    </div>
  }
}