import React, { Component } from 'react'

import { PickerView } from 'antd-mobile'

import FilterFooter from '../../../../components/FilterFooter'
export default class FilterPicker extends Component {
  // 选中的值是状态数据(设置默认值)
  state = {
    value:this.props.defaultValue
  }
  handleValue=(value)=>{
    console.log('val================',value)
    // 选中值后改状态
    this.setState(()=>{
      return {value}
    },()=>{
      console.log(this.state.value)
    })
  }
  render() {
    const { onCancel , onSave, data , col,type} = this.props;
    const {value} = this.state; // 状态数据
    return (
      <>
        {/* 选择器组件： */}
        <PickerView data={data} value={value} cols={col} onChange={this.handleValue} />

        {/* 底部按钮 */}
        <FilterFooter onCancel={onCancel} onSave = {()=>{
          // 选中值后执行保存方法(回调函数里执行方法可以传参)
            onSave(type,value)
          }
        }/>
      </>
    )
  }
}
