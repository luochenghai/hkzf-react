import React from 'react';
import { NavBar, Icon ,Toast } from 'antd-mobile';
import {List,AutoSizer} from 'react-virtualized';
import { getAreaCity ,getHotCity} from '../Index/api.js'
import { getCurrentCity } from "../../utils/getCurrentCity.js";
import { setCity } from "../../utils/lsCity.js";

import './index.css'
class CityList extends React.Component { 
    // 状态数据
    state = {
       cityIndex:[],
       citylist:{}
    }
 componentDidMount() { this.loadCities()}
    // react 长列表
 rowRenderer = ({ key, index, style}) =>{
      const {cityIndex,citylist} = this.state;
      const letter = cityIndex[index];
      return (
        <div key={key} style={style} className="city">
          <div className="title"> {letter}</div>
          {/* 插值表达式里可以放数组 */}
          {citylist[letter].map(item=>{
            return  <div className="name" key={item.value} onClick={()=>{
              // 筛选北京上海广州 深圳，目前这几个城市有房源数据
              if (['北京','上海','深圳','广州'].includes(item.label)){
                 this.props.history.push('/home');
                 setCity({label:item.label,value:item.value});
              } else {
                Toast.info('暂无房源', 2, null, false);
              }
            }}>{item.label}</div>
          })}
         
        </div>
      );
    }
  formCityData = (data)=>{
      let cityIndex =[];
      let citylist ={};
      data.map(item=>{
        const letter = item.short.substr(0,1);
        if (letter in citylist){
          citylist[letter].push(item);
        }else{
          citylist[letter]= [item];
        }
      })
      // cityIndex 是无序的，需要处理成有序的
      cityIndex = Object.keys(citylist).sort();
      // console.log('cityIndex',cityIndex)
      return {cityIndex,citylist}
    }


  loadCities = async () => { 
      const { data } = await getAreaCity();
      // 获取热门城市
      const { data:hotData } = await getHotCity();
      const { status, body } = data;
  
      if (status === 200) { 
        // 处理后台返回的数据
        const {cityIndex,citylist} = this.formCityData(body);
        // 在原来的数据的基础上增加热门城市
        cityIndex.unshift('热门城市');
        citylist['热门城市'] = hotData.body;
        // 当前城市
        getCurrentCity().then(res=>{
          const {label,value} =res;
          cityIndex.unshift('当前城市');
          citylist['当前城市'] = [{label,value}];
          this.setState(()=>{
            return {...this.state,cityIndex,citylist}
          })
        })
       
      //  console.log(citylist,cityIndex)
      }
     
  }
  // 计算行高
  calHeight = ({index})=>{
    const {cityIndex,citylist} = this.state;
    const letter = cityIndex[index];
    return 36+50*citylist[letter].length;
  }

  render() {
    const {cityIndex} = this.state;
        return (<div className="citylist">
            <NavBar
                className="navbar"
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {this.props.history.goBack()}}
              >选择城市</NavBar>
              {/* 长列表 */}
              {/* AutoSizer 其实就是一HOC 高阶组件 */}
              <AutoSizer>
                {({height, width}) => (
                  <List
                    width={width}
                    height={height}
                    rowCount={cityIndex.length}  
                    rowHeight={this.calHeight}
                    rowRenderer={this.rowRenderer}
                  />
                  )}
                 </AutoSizer>
        </div>)
     }
}
export default CityList