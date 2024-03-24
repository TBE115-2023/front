import axiosInstance from "./axiosInstance";

const getLastData = () => axiosInstance.get("/api/mediciones/sensores");

const enviarConfiguracionControl = (params = {}) =>
  axiosInstance.post("/api/mediciones/control", params);

const cargarDatos = (params = {}) =>
  axiosInstance.get("/api/mediciones/control/", params);

const obtenerLogs = (params = {}) =>
  axiosInstance.get("/api/mediciones/logs", params);
export default {
  getLastData,
  enviarConfiguracionControl,
  cargarDatos,
  obtenerLogs
};
