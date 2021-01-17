import React, { Component } from 'react'

// Filter组件是以下三个组件是的的父组件
import FilterTitle from '../FilterTitle'
import FilterPicker from '../FilterPicker'
import FilterMore from '../FilterMore'

import styles from './index.module.css'



export default class Filter extends Component {
  state = {
    // 标题高亮状态(数据驱动视图，改变父组件的数据的状态来控制子组件的显示)
    titleSelectedStatus: {
      area: false,
      mode: false,
      price: false,
      more: false
    },
    openType:''
  };
  // 改变成高亮的方法
  onTitleClick = (type)=>{
    // console.log('type',type)
    this.setState(
      {titleSelectedStatus: {...this.state.titleSelectedStatus,[type]:true},openType:type}
    )
  }
  render() {
    const {titleSelectedStatus,openType} = this.state;
    // console.log('openType',openType)
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        {/* <div className={styles.mask} /> */}

        <div className={styles.content}>
          {/* 标题栏 */}{/* 副组件给子组件传值 */}
          <FilterTitle titleSelectedStatus ={titleSelectedStatus} onTitleClick={this.onTitleClick}/>

          {/* 前三个菜单对应的内容： */}
          { (openType==='area'|| openType==='mode'|| openType==='price' ) && <FilterPicker />}

          {/* 最后一个菜单对应的内容： */}
          {/* <FilterMore /> */}
        </div>
      </div>
    )
  }
}
