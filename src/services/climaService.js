import axiosInstance from "./axiosInstanceClima";

const getLastData = (query)=>{
    return axiosInstance.get('/api/mediciones/sensores',{
        query
    })
}

export default {
    getLastData
}