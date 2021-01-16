import request from '../../utils/http.js'

export const getSwiper = () => {
    return  request.get(`/home/swiper`)
} 

export const getGroups = () => {
    // area 代表的是地区的编码-》暂时不管
    return  request.get(`/home/groups?area=AREA%7C88cff55c-aaa4-e2e0`)
} 

export const getNews = () => {
    // area 代表的是地区的编码-》暂时不管
    return  request.get(`/home/news?area=AREA|88cff55c-aaa4-e2e0`)
} 

// 返回城市的名字和id信息(name的默认值市 北京市)
export const getAreaInfo = (name='%E5%8C%97%E4%BA%AC') => {
    // area 代表的是地区的编码-》暂时不管
    return  request.get(`/area/info?name=${name}`)
} 


export const getAreaCity = () => {
    return  request.get(`/area/city?level=1`)
} 

export const getHotCity = () => {
    return  request.get(`/area/hot`)
} 