<template>
  <v-card>
    <v-card-title>
      Historial de eventos del sistema
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="(log, index) in logs" :key="index">
          <v-list-item-avatar>
            <v-icon>mdi-minus</v-icon>
          </v-list-item-avatar>
          <v-list-item-title>
            {{ log['MENSAJE'] }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ moment(log['Fecha_y_hora']).format('DD/MM/YYYY HH:mm:ss') }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
import servicioConsulta from '../services/consultaService'
import moment from 'moment'
export default{
  name:'logs_base',
    data: () => ({
      logs:[],
      moment: moment
    }),
    methods:{
      async obtenerLogs(){
        const { data } = await servicioConsulta.obtenerLogs()
        this.logs = data
      }
    },
    async mounted(){
      await this.obtenerLogs()
    }
}
</script>

