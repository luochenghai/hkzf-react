import request from '../../utils/http.js'

export const getSwiper = () => {
    return  request.get(`/home/swiper`)
} 

export const getGroups = () => {
    // area 代表的是地区的编码-》暂时不管
    return  request.get(`/home/groups?area=AREA%7C88cff55c-aaa4-e2e0`)
} 