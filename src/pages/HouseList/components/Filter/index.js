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
    }
  };
  
  render() {
    const {titleSelectedStatus} = this.state;
    return (
      <div className={styles.root}>
        {/* 前三个菜单的遮罩层 */}
        {/* <div className={styles.mask} /> */}

        <div className={styles.content}>
          {/* 标题栏 */}{/* 副组件给子组件传值 */}
          <FilterTitle titleSelectedStatus ={titleSelectedStatus}/>

          {/* 前三个菜单对应的内容： */}
          {/* <FilterPicker /> */}

          {/* 最后一个菜单对应的内容： */}
          {/* <FilterMore /> */}
        </div>
      </div>
    )
  }
}
