import React from 'react';
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
//     key: 'index',index
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

   // 渲染组件
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
        return (
            <div className="Tabbar">
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                noRenderContent={ false}
                >
                    { this.renderTabBar()}
              </TabBar>
            </div>
          );
    }
}
export default Home