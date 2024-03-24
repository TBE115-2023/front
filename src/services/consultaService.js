import axiosInstance from "./axiosInstance";

const getLastData = () => axiosInstance.get("/api/mediciones/sensores");

const enviarConfiguracionControl = (params = {}) =>
  axiosInstance.post("/api/mediciones/control", params);

const cargarDatos = (params={}) => axiosInstance.get('/api/mediciones/control/', params)

const getMayor = () => {
  return axiosInstance.get();
};

export default {
  getLastData,
  enviarConfiguracionControl,
  cargarDatos
};
