import React, { Component } from 'react'
// 房屋查询条件获取
import { getHouseCondition } from "./api.js";
import { getCity } from "../../../../utils/lsCity.js";
// Filter组件是以下三个组件是的的父组件
import FilterTitle from '../FilterTitle'
import FilterPicker from '../FilterPicker'
import FilterMore from '../FilterMore'

import styles from './index.module.css'

// 获取当前城市id
const {value} =  getCity('curr_city')
// 默认值
const selectedValues = {
  //area: ['area', 'null'],
   area: ['area', 'AREA|69cc5f6d-4f29-a77c', 'AREA|73aa1890-64c7-51d9'],
 // mode: ['null'],
   mode: ['true'],
 // price: ['null'],
   price: ['PRICE|1000'],
  more: []
}
export default class Filter extends Component {
  componentDidMount(){
    this.loadHouseCondition()
  }
  state = {
    // 标题高亮状态(数据驱动视图，改变父组件的数据的状态来控制子组件的显示)
    titleSelectedStatus: {
      area: false,
      mode: false,
      price: false,
      more: false
    },
    openType:'',
    // 将当前城市ID赋值给状态数据
    currCityValue:value,
    filterData:'',
    selectedValues,
  };
  // 改变成高亮的方法
  onTitleClick = (type)=>{
    // console.log('type',type)
    this.setState(
      {titleSelectedStatus: {...this.state.titleSelectedStatus,[type]:true},openType:type}
    )
  }
  // 取消按钮
  onCancel = ()=>{
     this.setState(()=>{return {openType:''}})
  }
  // 确认按钮value
  onSave = (type,value)=>{
    console.log(type,value)
    this.setState(()=>{return {openType:''}})
  }
  // 获取房屋查询条件
  loadHouseCondition = async ()=>{
      const {currCityValue} = this.state;
      const {data:{body}} = await getHouseCondition(currCityValue);
      //console.log(body)
      this.setState(()=>{
         return {filterData:body}
      })
  }
  renderFilterPicker = ()=>{
    const {openType,filterData:{area,rentType,price,subway}} = this.state;
    let data=[],col;
    let defaultValue = selectedValues[openType];
    if (openType==='area'|| openType==='mode'|| openType==='price'){
    //  console.log(defaultValue)
        switch(openType){
            case 'area':
             data = [area,subway]
             col= 3;
            break;
            case 'mode':
              data = rentType
              col= 1;
            break;
            case 'price':
              data = price
              col= 1;
            break;
            default:
            break;
        }
        return (<FilterPicker data={data} col={col} type={openType} defaultValue={defaultValue} onCancel={this.onCancel} onSave={this.onSave} />)
    } 
  }
 
  render() {
    const { titleSelectedStatus, openType } = this.state;
    // console.log('openType',openType)
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        {/* 点击确认按钮是显示遮罩层 */}
        { (openType==='area'|| openType==='mode'|| openType==='price' )  && <div className={styles.mask} onClick={()=>{
            this.onCancel()
        }}/>}
        <div className={styles.content}>
          {/* 标题栏 */}{/* 副组件给子组件传值 */}
          <FilterTitle titleSelectedStatus ={titleSelectedStatus} onTitleClick={this.onTitleClick} />

          {/* 前三个菜单对应的内容： */}
          { 
            /* 原来的写法，现在抽离成单独的方法 */
            //(openType==='area'|| openType==='mode'|| openType==='price' ) && <FilterPicker data={filterData} onCancel={this.onCancel} onSave={this.onSave} />
            this.renderFilterPicker()
          }
          
          {/* 最后一个菜单对应的内容： */}
          {/* <FilterMore /> */}
        </div>
      </div>
    )
  }
}
