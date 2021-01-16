const CURR_CITY = 'currcity'

export const setCity = curr_city=>window.localStorage.setItem(CURR_CITY,JSON.stringify(curr_city))

export const getCity = ()=>JSON.parse( window.localStorage.getItem(CURR_CITY))
   
export const removeCity = ()=> window.localStorage.removeItem(CURR_CITY)
 
 