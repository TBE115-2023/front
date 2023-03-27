import axios from 'axios'
const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*"// creacion de cabeceras en el front end
    },
  });
export default{
    namespaced: true,
    state: {
        datos: [],// los datos a mostrar por defecto dentro de la pagina
    },
    mutations: {
        setdatos(state, payload) {
        state.datos=payload;
        },
    },
    actions: {
        fetchdatos(state) {
            let url = "http://192.168.1.30:3000/api/mediciones/sensores";//los datos a buscar para mostrar en el front end
            axiosInstance.get(url)
            .then(resp => {
                
            });
        },
    },
    getters: {
        //
    }
}