import axios from 'axios'

export const getSwiper = () => {
    return  axios.get(`http://localhost:8080/home/swiper`)
} 