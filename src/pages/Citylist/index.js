import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { getAreaCity } from '../Index/api'
class CityList extends React.Component { 
    componentDidMount() { this.loadCities()}
    loadCities = async () => { 
      const { data } = await getAreaCity();
      console.log('data',data)
      const { status, body } = data;
      if (status === 200) { 
        // this.setState(() => { 
        //   return { newsData: body }
        // })
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