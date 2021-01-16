import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { getAreaCity } from '../Index/api'
//import Item from 'antd-mobile/lib/popover/Item';
class CityList extends React.Component { 
    componentDidMount() { this.loadCities()}
   
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
    //  console.log('data',data)
      const { status, body } = data;
      if (status === 200) { 
        // 处理后台返回的数据
        const {cityIndex,citylist} = this.formCityData(body);
        console.log(citylist,cityIndex)
      }
     
  }
    render() {
        return (<div>
            <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => {this.props.history.goBack()}}
      >选择城市</NavBar>
        </div>)
     }
}
export default CityList