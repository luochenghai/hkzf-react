
import { getAreaInfo } from '../pages/Index/api'
import { setCity,getCity,removeCity } from "../utils/lsCity.js";
const {BMap} = window;
// callback版本
// export const getCurrentCity = (cb)=>{
//     const myCity = new BMap.LocalCity();
//     const myFun = async result=>{
//     const cityName = result.name;
//     // 通过接口查询城市
//     const {data} = await getAreaInfo(cityName);
//     const {body:{label,value}} =  data;
//     // 以下是修改状态，抽离出去，这里之对外提供数据
//     //   this.setState(()=>{
//     //     // return {currentCityName:body.label}
//     //     return {cityInfo:{...this.state.cityInfo,label,value}}
//     //   })
//     cb({label,value});
//      }
//     myCity.get(myFun); 
//   }
  
// promise 版本
export const getCurrentCity = ()=>{
 // 本地缓存
 const currCity =  getCity('curr_city')
 if (!currCity){
    return new Promise(resolve=>{
        const myCity = new BMap.LocalCity();
        const myFun = async result=>{
        const cityName = result.name;
        // 通过接口查询城市
        const {data} = await getAreaInfo(cityName);
        const {body:{label,value}} =  data;
        // 存
        setCity({label,value})
         // resolve 里的参数在then中通过形参可以获取
          resolve({label,value})
         }  
         myCity.get(myFun); 
       })
 }else{
    // return new Promise(resolve=>{
    //     resolve(currCity)
    // })
   // 上下等价
    return Promise.resolve(currCity)

 }

  }