<template>
  <v-card>
    <v-card-title center>
    <h1>Consultas</h1>
    </v-card-title>
    <v-card-text>
    <v-row>
      <v-col>
        <v-text-field
        label="Ingrese la frecuencia de actualización en segundos"
        v-model="tiempoRecarga"
        :disabled="bloqueo"
        ></v-text-field>
        <v-btn @click="bloquearTiempo">{{  bloqueo? 'Des' : ''  }}Bloquear</v-btn>
      </v-col>
    </v-row>
      <v-row>
      <v-col>
        <v-data-table 
       :headers="headers" 
       :items="data" 
       :options="options"
       @pagination="paginar"
       > 
      <template  v-slot:[`item.FECHA`]="{ item }"
      >
    {{moment(item.FECHA).format('DD/MM/YYYY HH:mm:ss')}}
    <!-- {{moment().format('DD/MM/YYYY HH:mm:ss')}} para mostrar fecha de ahora-->
    </template>
    <template  v-slot:[`item.DTH11H`]="{ item }"
      >
    <v-chip :color="item.DTH11H > 100 ? '#e33c05' : '#4287f5' ">
      {{ item.DTH11H }}
    </v-chip>
    </template>
      </v-data-table>
      </v-col>
    </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import servicioConsulta from '../services/consultaService'
import * as moment from 'moment';
export default{
  data: () => ({
data:[],
tiempoRecarga: 10,
bloqueo:true,
interval:null,
moment: moment,
options:{
  page: 1,
  itemsPerPage: 10,
  // sortBy: 'id',
},
headers:[
    {
      text: 'Fecha y hora',
      align: 'start',
      sortable: true,
      value: 'FECHA',
    },
    {
      text: 'Humedad Ambiente',
      align: 'start',
      sortable: true,
      value: 'DTH11H',
    },
    {
      text: 'Temperatura Ambiente',
      align: 'start',
      sortable: true,
      value: 'DTH11T',
    },
    {
      text: 'Humedad de tierra C',
      align: 'start',
      sortable: true,
      value: 'HUMCAP',
    },
    {
      text: 'Humedad de tierra R',
      align: 'start',
      sortable: true,
      value: 'HUMRES',
    },
    {
      text: 'Temperatura Ambiente LM35',
      align: 'start',
      sortable: true,
      value: 'LM35',
    },

]
  }),
  methods:{
    async obtenerUltimoRegistro(){
      const {data} =  await servicioConsulta.getLastData(this.options)
       this.data=data
    },
    paginar({
      page,
      itemsPerPage,
      sortBy
    }){
      this.options = {
        page,
        itemsPerPage,
        // sortBy
      }
    },
    bloquearTiempo(){
      this.bloqueo = !this.bloqueo
      if(this.bloqueo){
        clearInterval(this.interval)
        this.modificarInterval()
      }
    },
    modificarInterval(){
      const interval = setInterval(
          this.obtenerUltimoRegistro,
          this.tiempoRecarga * 1000
        )
        this.interval = interval
    }
  },
  async mounted(){
    await this.obtenerUltimoRegistro()
    this.modificarInterval()
  }
}
</script>