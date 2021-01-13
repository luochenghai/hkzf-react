import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
class CityList extends React.Component { 
    componentDidMount() { }
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