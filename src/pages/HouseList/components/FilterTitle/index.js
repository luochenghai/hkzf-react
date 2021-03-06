import React from 'react'

import { Flex } from 'antd-mobile'

import styles from './index.module.css'

// 条件筛选栏标题数组：
const titleList = [
  { title: '区域', type: 'area' },
  { title: '方式', type: 'mode' },
  { title: '租金', type: 'price' },
  { title: '筛选', type: 'more' }
]

export default function FilterTitle({titleSelectedStatus,onTitleClick}) {
  // 可以通过props 来解构参数，也可以直接参数解构
  // const {titleSelectedStatus,onTitleClick} = props;
  // console.log('titleSelectedStatus',titleSelectedStatus)
  return (
    <Flex align="center" className={styles.root}>
      {titleList.map(item=>{
        return  <Flex.Item key={item.type} onClick={()=>{
          onTitleClick(item.type)
        }}>
        {/* 选中类名： selected */}
        <span className={[styles.dropdown, titleSelectedStatus[item.type]? styles.selected:''].join(' ')}>
          <span>{item.title}</span>
          <i className="iconfont icon-arrow" />
        </span>
      </Flex.Item>
      })}
     
    </Flex>
  )
}
