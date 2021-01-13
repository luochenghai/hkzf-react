import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './index.css'

 const {BMap} = window;
class Map extends React.Component { 
    componentDidMount() { 
        this.initMap();
    }
    initMap = ()=>{
        const map = new BMap.Map("container");    
        const point = new BMap.Point(116.404, 39.915);    
        map.centerAndZoom(point, 15);  
    }
    render() { 
        return (
            <div className="map">
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                    onLeftClick={() => {
                        this.props.history.goBack();
                }}
            >地图找房</NavBar>
                {/* 地图 */}
              <div id="container"></div>
           </div>
          )
    }
}
export default Map
// qp55nICrsu3E4Gnia7VRTW0C89FaK67c