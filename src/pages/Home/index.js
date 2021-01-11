import React from 'react';
import {Link,Route} from 'react-router-dom'
// 通过Home 
import { TabBar } from 'antd-mobile';
import './index.css'
import '../../assets/fonts/iconfont.css'
import Index from '../../pages/Index/index.js'
import HouseList from '../../pages/HouseList/index.js'
import Profile from '../../pages/Profile/index.js'
import { tabbardata} from './tabbardata.json'
//常量数据写在类组件的外面（最终应该写在一个json文件中）    
// const tabbardata = [{
//     title: '首页',
//     key: 'index',
//     iconUrl: 'icon-ind',
//     path:'/home/index'
// },
// {
//     title: '找房',
//     key: 'house',
//     iconUrl: 'icon-findHouse',
//     path:'/home/house'
//     },
//     {
//         title: '我的',
//         key: 'profile',
//         iconUrl: 'icon-my',
//         path:'/home/profile'
//     }]
class Home extends React.Component { 
    componentDidMount() { }
    state = {
        // selectedTab: 'index'
        selectedTab: this.props.location.pathname
    };

   renderComponent = (path) => { 
        switch (path) { 
            case '/home':
                return <Index />
            case '/home/house':
                return < HouseList/>
            case '/home/profile':
                return <Profile />
             default:
                return <Index/>
        }
    }
    renderTabBar = () => { 
        return tabbardata.map(item => { 
            return   <TabBar.Item
                title={ item.title}
                key={ item.key}
                icon={<i className={ `iconfont ${item.iconUrl}`}/>}
                selectedIcon={<i className={ `iconfont ${item.iconUrl}`}/>
                }
                selected={this.state.selectedTab === item.path}
                onPress={() => {
                    this.props.history.push(item.path);
                    this.setState({
                    selectedTab: item.path,
                    });
                }}                  
            >
                {/* 切换显示的组件 */}
                { this.renderComponent(item.path)}
            </TabBar.Item>

        })
    }
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
                    noRenderContent={ false}
                >
                    { this.renderTabBar()}

                {/* <TabBar.Item
                  title="首页"
                  key="Life"
                  icon={<i className="iconfont icon-ind"/>}
                  selectedIcon={<i className="iconfont icon-ind"/>
                  }
                  selected={this.state.selectedTab === '/home/index'}
                  onPress={() => {
                      this.props.history.push('/home/index');
                      this.setState({
                        selectedTab: '/home/index',
                      });
                  }}
                 
                >
                 <Index/>
                </TabBar.Item>
                <TabBar.Item
                icon={<i className="iconfont icon-findHouse"/>}
                  selectedIcon={
                    <i className="iconfont icon-findHouse"/>
                  }
                  title="找房"
                  key="Koubei"
                  selected={this.state.selectedTab === '/home/house'}
                  onPress={() => {
                      this.props.history.push('/home/house');
                      this.setState({
                        selectedTab: '/home/house',
                      });
                  }}
                  data-seed="logId1"
                >
                <HouseList/>
                </TabBar.Item> */}
                {/* <TabBar.Item
                  icon={<i className="iconfont icon-ind"/>}
                  selectedIcon={
                    <i className="iconfont icon-ind"/>
                  }
                  title="资讯"
                  key="Friend"
                  selected={this.state.selectedTab === 'greenTab'}
                  onPress={() => {
                    this.props.history.push('/home/index')
                  }}
                >
               
                </TabBar.Item> */}
                {/* <TabBar.Item
                 icon={<i className="iconfont icon-my"/>}
                  selectedIcon={<i className="iconfont icon-my"/>}
                  title="我的"
                  key="my"
                  selected={this.state.selectedTab === '/home/profile'}
                  onPress={() => {
                      this.props.history.push('/home/profile');
                      this.setState({
                        selectedTab: '/home/profile',
                      });
                  }}
                >
               <Profile/>
                </TabBar.Item> */}
              </TabBar>
            </div>
          );
    }
}
export default Home