import React from 'react';
import  Filter  from "./components/Filter/index.js";
// 通过Home 中的三个Link导航切换三个组件的显示与隐藏
class HouseList extends React.Component { 
    componentDidMount() { }
    render() { 
        return (<div>
            <Filter/>
        </div>)
    }
}
export default HouseList