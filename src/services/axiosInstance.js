
import axios from 'axios'
const axiosInstance = axios.create(
  {
  headers: {
      "Access-Control-Allow-Origin": "*"// creacion de cabeceras en el front end
    },
  // baseURL: 'http://100.115.157.40:3003'
  baseURL: 'http://localhost:3306'
  },
  );
  export default axiosInstance