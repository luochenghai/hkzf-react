import React from 'react';
import { Carousel ,Flex , Grid, WingBlank ,NavBar} from 'antd-mobile';
import { getSwiper ,getGroups ,getNews,getAreaInfo} from './api.js'
import './index.scss'
// withRouter 引入这个高阶组件是为了使index组件导出后的props有值
import { withRouter } from "react-router-dom";
// 引入图片
import  Nav1  from "../../assets/images/nav-1.png";
import  Nav2  from "../../assets/images/nav-2.png";
import  Nav3  from "../../assets/images/nav-3.png";
import  Nav4  from "../../assets/images/nav-4.png";
// 通过Home 中的三个Link导航切换三个组件的显示与隐藏
const BaseURL = `http://localhost:8080`;
const {BMap} = window;
const nav = [
  {
    img: Nav1,
    title: '整租',
    path: '/home/list',
    id:0
  },
  {
    img: Nav2,
    title: '合租',
    path:'/home/list',
    id:1
  },
  {
    img: Nav3,
    title: '地图找房',
    path: '/map',
    id:2
  },
  {
    img: Nav4,
    title: '去出租',
    path: '/login',
    id:3
  }
]
class Index extends React.Component { 
    state = {
      swiperData: [],
      groupsData: [],
      newsData: [],
      imgHeight: 176,
      loadFinshed: false , // 数据驱动视图，解决轮播图bug
     // currentCityName:'北京市'
     cityInfo:{
       name:'北京',
       value:'%E5%8C%97%E4%BA%AC'

     }
      }
     componentDidMount() {
       this.loadSwiper();
       this.loadGroups();
       this.loadNews();
       this.getCurrentCity();
     }
      // 获取轮播图数据的方法
      loadSwiper = async () => { 
        const { data } = await getSwiper();
      //  console.log(data)
        const { status, body } = data;
        if (status === 200) { 
          // 数据获取成功后，在回调函数中改变loadFinshed 的状态
          this.setState(() => { 
            return { swiperData: body }
          },
            () => {
            this.setState(() =>{
              return {loadFinshed: true }
            })
         })
        }
  }
      
        //获取租房小组的数据
        loadGroups = async () => { 
          const { data } = await getGroups();
          console.log('data',data)
          const { status, body } = data;
          if (status === 200) { 
            this.setState(() => { 
              return { groupsData: body }
            })
          }
      }
       //获取租房小组的数据
       loadNews = async () => { 
        const { data } = await getNews();
        console.log('data',data)
        const { status, body } = data;
        if (status === 200) { 
          this.setState(() => { 
            return { newsData: body }
          })
        }
    }
  // 轮播图方法
  renderSwiper = () => { 
    const { swiperData } = this.state;
    return swiperData.map(item => (
      <a
        key={item.id}
        href="http://www.itcast.com"
        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
        >
        <img
            src={`${BaseURL}${item.imgSrc}`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
            // 图片自适应
            window.dispatchEvent(new Event('resize'));
            this.setState({ imgHeight: 'auto' });
            }}
        />
      </a>
  ))
  }
    // 导航
  renderNav = () =>{
    // 第一层return 返回的是一个数组
    return nav.map((item) => { 
        // 第二层return 返回的是一个react 元素
      return <Flex.Item
              className="nav"
              key={item.id}
              onClick={() => { this.props.history.push(item.path)}} >
                <img src={item.img} alt="图片无法显示" />
                <p>{ item.title}</p>
            </Flex.Item>
      })
  }
  // 租房小组
  renderGrid = () => { 
    const { groupsData } = this.state;
  return <Grid
      data={groupsData}
      columnNum={2}
      square={false}
      activeStyle
      hasLine={ false}
      renderItem={(item) => { 
        return (
          <Flex className="grid-item" justify="between">
            <div className="grid-item">
                <h3>{ item.title}</h3>
                <p>{ item.desc}</p>
            </div>
            <img src={`${BaseURL}${item.imgSrc}`} alt=""/>
          </Flex>
      )
    }
          
    }
  />
  }

  // 最新资讯
  renderNews = () => { 
    const { newsData } = this.state;
    return newsData.map(item => { 
      return <div className="news-item" key={item.id}>
       {/* 左侧图片 */}
       <div className="imgwrap">
          <img
            className="img"
            src={`${BaseURL}${item.imgSrc}`}
            alt=""
          />
       </div>
       <Flex className="content" direction="column" justify="between">
         <h3 className="title">{item.title}</h3>
         <Flex className="info" justify="between">
           <span>{ item.from}</span>
           <span>{ item.date}</span>
          </Flex>
       </Flex>
     </div>
    })
  }

  getCurrentCity = ()=>{
    const myCity = new BMap.LocalCity();
    const myFun = async result=>{
      const cityName = result.name;
      // 通过接口查询城市
      const {data} = await getAreaInfo(cityName);
      const {body:{label,value}} =  data;
      // console.log('data',data)
      // console.log("当前定位城市:"+cityName);
      this.setState(()=>{
        // return {currentCityName:body.label}
        return {cityInfo:{...this.state.cityInfo,label,value}}
      })
    }
    myCity.get(myFun); 
  }
  render() { 
    const { loadFinshed ,cityInfo} = this.state;
      return <div>
        <NavBar mode="dark" icon={cityInfo.label}>首页</NavBar>
                  
        {/* 轮播图 */}
        <Carousel autoplay={loadFinshed} infinite>
          { this.renderSwiper()}
        </Carousel>
          
        {/* 宫格菜单 */}
        <Flex>
           {this.renderNav()} 
        </Flex>
        {/* 租房小组+宫格菜单导航（4个） */}
        <div className="group">
          <Flex className="group-title" justify="between">
            <h3>租房小组</h3>
            <span>更多</span>
          </Flex>
          { this.renderGrid()}
        </div>
        {/* 最新资讯 */}
        <div className="news">
          <h3 className="group-title">最新资讯</h3>
          <WingBlank size="md"> { this.renderNews()}</WingBlank>
        </div>
      </div>
    }
}
export default withRouter(Index)