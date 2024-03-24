<template>
  <div>
    <v-layout style="overflow: hidden">
          
          
    </v-layout>


  <v-main>
    <v-row>
    
      <v-col style = "height: 175px;"> <center>
        
        <v-progress-circular  :rotate="360"   :size="125"  :width="15"  :value="33"    color="teal" >
          {{ 37 }}
        </v-progress-circular>
       <v-sheet :width="100" color="#DBF9FC"><center><strong>Temperatura</strong></center></v-sheet>
      </center></v-col>
      
      <v-col> <center>
        <v-progress-circular   :rotate="360"   :size="125"  :width="15"   :value="33"  color="teal" > 
          {{ 60 }}
        </v-progress-circular>
        <v-sheet :width="100" color="#DBF9FC"><center><strong> Humedad </strong></center></v-sheet>
      </center></v-col>
     
     <v-responsive width="100%"></v-responsive>
      

      <v-col> <center>
        <v-progress-circular  :rotate="360"  :size="125"   :width="15"   :value="33"   color="teal" >
          {{ 80 }}
         </v-progress-circular>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Iluminosidad</strong></center></v-sheet>
        </center></v-col>

      <v-col><center>
        <v-progress-circular    :rotate="360"    :size="125"    :width="15"    :value="33"    color="teal" >
         {{ 3  }}
        </v-progress-circular>
       <v-sheet :width="100" color="#DBF9FC"> <center><strong>dias desde siembra</strong></center> </v-sheet>
      </center></v-col>
    </v-row>
    <footerCustom></footerCustom>
  </v-main>
</div>
</template>

<script>
// import router from '@/router';
import footerCustom from './footerApp.vue'

  export default {
    data: () => ({
      drawer: false,
      group: null,
      arreglo:[
        {
          icon:"mdi-database-search",
          name:"Consultas",
          route:"consultas"
        },
        // {
        //   icon:"mdi-cog-outline",
        //   name:"Administracion",
        //   route:"administracion"
        // },
        {
          icon:"mdi-monitor-dashboard",
          name:"Control",
          route:"control"
        },{
          icon:"mdi-sun-thermometer-outline",
          name:"Configuracion",
          route:"configuracion"
        },
      ]
    }),
    components:{
        footerCustom
      },
    methods:{
      routeNav(route){
        this.$router.push({name:route})
      }
    }
  }
</script>

<style>

Body {Background-color : #DBF9FC;}
</style>