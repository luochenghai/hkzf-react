import request from '../../../../utils/http.js'

export const getHouseCondition = (value='AREA%7C88cff55c-aaa4-e2e0') => {
    return  request.get(`/houses/condition?id=${value}`)
} 
