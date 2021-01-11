import React from 'react';
import { Carousel } from 'antd-mobile';
import { getSwiper} from './api.js'
// 通过Home 中的三个Link导航切换三个组件的显示与隐藏
const BaseURL = `http://localhost:8080`
class Index extends React.Component { 
    state = {
      swiperData: [],
      imgHeight: 176,
      loadFinshed: false  // 数据驱动视图，解决轮播图bug
      }
     componentDidMount() {
        this.loadSwiper();
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
  render() { 
    const { loadFinshed } = this.state;
      return <div>
            {/* 轮播图 */}
                <Carousel autoplay={loadFinshed} infinite>
                  { this.renderSwiper()}
                </Carousel>
          
            {/* 宫格菜单 */}
            {/* 租房小组-导航（4个） */}
            {/* 最新资讯 */}
      </div>
    }
}
export default Index