import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
class Map extends React.Component { 
    componentDidMount() { }
    render() { 
        return (
            <NavBar
            mode="light"
            icon={<Icon type="left" />}
                onLeftClick={() => {
                    this.props.history.goBack();
            }}
          >地图找房</NavBar>
          )
    }
}
export default Map