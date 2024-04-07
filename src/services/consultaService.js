import axiosInstance from "./axiosInstance";

const getLastData = (params) => axiosInstance.get("/api/mediciones/sensores", {params});

const enviarConfiguracionControl = (params = {}) =>
  axiosInstance.post("/api/mediciones/control", {params});

const cargarDatos = (params = {}) =>
  axiosInstance.get("/api/mediciones/control/", params);

const obtenerLogs = (params = {}) =>
  axiosInstance.get("/api/mediciones/logs", params);

const ultimoControl = (params ={})=>axiosInstance.get('/api/mediciones/control/automatico');

const escribirControl = (body={})=>axiosInstance.post('/api/mediciones/control/manual', {body});
export default {
  getLastData,
  enviarConfiguracionControl,
  cargarDatos,
  obtenerLogs,
  ultimoControl,
  escribirControl
};
