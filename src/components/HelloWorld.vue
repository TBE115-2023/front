<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-data-table
          :items="data"
          :headers="headers"
          :items-per-page="5"
          class="elevation-1"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from 'axios'
const axiosInstance = axios.create({
headers: {
      "Access-Control-Allow-Origin": "*"// creacion de cabeceras en el front end
    },
  });
  export default {
    name: 'HelloWorld',



    methods:{
                buscar(){
            let url = "http://192.168.1.30:3003/api/mediciones/sensores";//los datos a buscar para mostrar en el front end
            axiosInstance.get(url)
            .then(resp => {
            console.log(resp.data.results)
            this.data=resp.data.results
            });
            }
        },
    mounted(){
          this.buscar()
      },
  }
</script>
