import React from 'react';
import { Carousel } from 'antd-mobile';
// 通过Home 中的三个Link导航切换三个组件的显示与隐藏
class Index extends React.Component { 
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render() { 
      return <div>
        {/* 轮播图 */}
            <Carousel
            autoplay={TekJlZRVCjLFexlOCuWn}
            infinite
            >
            {this.state.data.map(val => (
                <a
                key={val}
                href="http://www.itcast.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                    // 图片自适应
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                    }}
                />
                </a>
            ))}
            </Carousel>
            {/* 宫格菜单 */}
            {/* 租房小组-导航（4个） */}
            {/* 最新资讯 */}
        </div>
    }
}
export default Index