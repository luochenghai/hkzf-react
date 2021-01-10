import React from 'react';
import {Link,Route} from 'react-router-dom'
// 通过Home 
import { TabBar } from 'antd-mobile';

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
            <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                
              >
                <TabBar.Item
                  title="首页"
                  key="Life"
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                  />
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
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                    />
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
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                  selectedIcon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                    />
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
                  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
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