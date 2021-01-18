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
    currCityValue:value
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
  // 确认按钮
  onSave = ()=>{
    this.setState(()=>{return {openType:''}})
  }
  loadHouseCondition = async ()=>{
      const {currCityValue} = this.state;
      const {data} = await getHouseCondition(currCityValue);
      console.log(data)
  }
  render() {
    const {titleSelectedStatus,openType} = this.state;
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
          { (openType==='area'|| openType==='mode'|| openType==='price' ) && <FilterPicker onCancel={this.onCancel} onSave={this.onSave}/>}

          {/* 最后一个菜单对应的内容： */}
          {/* <FilterMore /> */}
        </div>
      </div>
    )
  }
}
