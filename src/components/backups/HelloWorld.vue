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
    data: () => ({
      headers: [
          {
            text: 'Fecha de medición',
            align: 'start',
            sortable: false,
            value: 'fecha',
          },
          { text: 'Luminocidad  (en lux, medianoche=35; mediodía =600) ', value: 'sensor1' },
          { text: 'Temperatura de ambiente (C)', value: 'sensor2' },
          { text: 'Humedad de Cultivos 1 %', value: 'sensor3' },
          { text: 'Humedad de Cultivos 2 %', value: 'sensor4' },
        ],
        data: []
    }),
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
