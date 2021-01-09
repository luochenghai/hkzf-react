import React from 'react'
// 在这个文件写路由代码
import Home from "./pages/Home/index.js";
import Map from "./pages/Map/index.js";
import { BrowserRouter as Router ,Route} from 'react-router-dom'
class App extends React.Component { 
  componentDidMount() { }
  render() { 
    return (
      <Router>
        <div className="App">
            <Route path='/home' component={Home}></Route>
            <Route path='/map' component={Map }></Route>
       </div>
      </Router>
    )
  }
}
export default App