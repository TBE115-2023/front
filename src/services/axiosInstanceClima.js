
import axios from 'axios'
const axiosInstance = axios.create(
  {
  headers: {
      "Access-Control-Allow-Origin": "*"// creacion de cabeceras en el front end
    },
  baseURL: 'https://api.openweathermap.org/data/3.0/onecall'
  },
  );
  export default axiosInstance