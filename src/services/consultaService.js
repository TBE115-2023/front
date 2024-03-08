import axiosInstance from "./axiosInstance";

const getLastData = ()=>{
    return axiosInstance.get('/api/mediciones/sensores')
}

const getMayor = ()=>{
    return axiosInstance.get()
}

export default {
    getLastData
}