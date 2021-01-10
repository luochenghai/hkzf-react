import React from 'react';
import {Link,Route} from 'react-router-dom'
// 通过Home 
import { TabBar } from 'antd-mobile';
import './index.css'
import '../../assets/fonts/iconfont.css'
import Index from '../../pages/Index/index.js'
import HouseList from '../../pages/HouseList/index.js'
import Profile from '../../pages/Profile/index.js'
    
    
class Home extends React.Component { 
    componentDidMount() { }
    state = {
        selectedTab: 'redTab'
    };

    render() { 
        // return <div>
        //     <Route path="/home/index" component={Index}></Route>
        //     <Route path="/home/house" component={HouseList}></Route>
        //     <Route path="/home/profile" component={Profile}></Route>
           
        //     <Link to="/home/index">首页</Link>
        //     <Link to="/home/house">找房</Link>
        //     <Link to="/home/profile">个人</Link>
        // </div>
       
        return (
            <div className="Tabbar">
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                
              >
                <TabBar.Item
                  title="首页"
                  key="Life"
                  icon={<i className="iconfont icon-ind"/>}
                  selectedIcon={<i className="iconfont icon-ind"/>
                  }
                  selected={this.state.selectedTab === 'redTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'redTab',
                    });
                  }}
                 
                >
                 
                </TabBar.Item>
                <TabBar.Item
                icon={<i className="iconfont icon-findHouse"/>}
                  selectedIcon={
                    <i className="iconfont icon-findHouse"/>
                  }
                  title="找房"
                  key="Koubei"
                  selected={this.state.selectedTab === 'blueTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'blueTab',
                    });
                  }}
                  data-seed="logId1"
                >
                
                </TabBar.Item>
                <TabBar.Item
                  icon={<i className="iconfont icon-ind"/>}
                  selectedIcon={
                    <i className="iconfont icon-ind"/>
                  }
                  title="资讯"
                  key="Friend"
                  selected={this.state.selectedTab === 'greenTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'greenTab',
                    });
                  }}
                >
               
                </TabBar.Item>
                <TabBar.Item
                 icon={<i className="iconfont icon-my"/>}
                  selectedIcon={<i className="iconfont icon-my"/>}
                  title="我的"
                  key="my"
                  selected={this.state.selectedTab === 'yellowTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'yellowTab',
                    });
                  }}
                >
         
                </TabBar.Item>
              </TabBar>
            </div>
          );
    }
}
export default Home