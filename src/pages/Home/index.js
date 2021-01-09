import React from 'react';
import {Link,Route} from 'react-router-dom'
// 通过Home 中的三个Link导航切换三个组件的显示与隐藏

import Index from '../../pages/Index/index.js'
import HouseList from '../../pages/HouseList/index.js'
import Profile from '../../pages/Profile/index.js'
    
    
class Home extends React.Component { 
    componentDidMount() { }
    render() { 
        return <div>
            <Route path="/home/index" component={Index}></Route>
            <Route path="/home/house" component={HouseList}></Route>
            <Route path="/home/profile" component={Profile}></Route>
           
            <Link to="/home/index">首页</Link>
            <Link to="/home/house">找房</Link>
            <Link to="/home/profile">个人</Link>

        </div>
    }
}
export default Home