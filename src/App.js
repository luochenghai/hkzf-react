import React from 'react'
// 在这个文件写路由代码
import Home from "./pages/Home/index.js";
import Map from "./pages/Map/index.js";
import CityList from "./pages/Citylist/index.js";
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom'


const Auth = () => { 
  // 在函数体内可以写if else 来控制组件的显示与隐藏
  return <Redirect exact from='/' to='/home'/>
}
class App extends React.Component { 
  componentDidMount() { }
  render() { 
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/map' component={Map}></Route>
          <Route path='/citylist' component={CityList}></Route>
          {/* <Redirect from='/' to='/home'/> */}
          {/* 进一步优化，写成函数组件 */}
          <Auth/>
          </Switch>
       </div>
      </Router>
    )
  }
}
export default App