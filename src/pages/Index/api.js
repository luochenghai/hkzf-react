import request from '../../utils/http.js'

export const getSwiper = () => {
    return  request.get(`/home/swiper`)
} 