<template>
 
 <v-main>
  <h1>Administración</h1>
  <div id="app">
  <v-app id="inspire">
    <v-container  style = "height: 175px;">
      <v-select  :items="tipocontrol" filled label="Tipo de control">
      </v-select>
      <v-row align="center">
        <v-col   class="d-flex" cols="1" sm="3">
         </v-col>
         <v-col class="d-flex" cols="1" sm="6" >
         </v-col>
      </v-row>
    </v-container>
  


    <v-card   height="50" color="#DBF9FC"><center><strong>Control Automatico ejecutado cada x minutos</strong></center></v-card>
    
    <v-select  :items="tipocultivo" filled label="Tipo de cultivo">
      </v-select>

    <v-row>
        <v-col style = "height: 175px;"> <center>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Climatizacion</strong></center></v-sheet>
       
        <v-slider   v-model="value"  step="10" disabled ticks label="disabled"></v-slider>

        <v-sheet :width="100" color="#DBF9FC"><center><strong>Temperatura</strong></center></v-sheet>
      </center></v-col>
      
      <v-col> <center>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Temperatura</strong></center></v-sheet>
        <v-progress-circular   :rotate="360"   :size="125"  :width="15"   :value="value"  color="teal" > 
          {{ 60 }}
        </v-progress-circular>
        <v-sheet :width="100" color="#DBF9FC"><center><strong> Humedad </strong></center></v-sheet>
      </center></v-col>
     
     <v-responsive width="100%"></v-responsive>
      

      <v-col> <center>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Temperatura</strong></center></v-sheet>
        <v-progress-circular  :rotate="360"  :size="125"   :width="15"   :value="value"   color="teal" >
          {{ 80 }}
         </v-progress-circular>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Iluminosidad</strong></center></v-sheet>
        </center></v-col>

      <v-col><center><v-sheet :width="100" color="#DBF9FC"><center><strong>Temperatura</strong></center></v-sheet>
        <v-progress-circular    :rotate="360"    :size="125"    :width="15"    :value="value"    color="teal" >
         {{ 3  }}
        </v-progress-circular>
       <v-sheet :width="100" color="#DBF9FC"> <center><strong>dias desde sembrado de cultivo</strong></center> </v-sheet>
      </center></v-col>
    </v-row>

    <v-card   height="50" color="#DBF9FC"><center><strong>Control Manual</strong></center></v-card>

    

    <v-row>
        <v-col style = "height: 175px;"> <center>

        <v-sheet :width="100" color="#DBF9FC"><center><strong>Climatizacion</strong></center></v-sheet>
         <v-slider   v-model="value"  step="10"  thumb-label   ticks></v-slider>
      <v-btn depressed>
      prueba
    </v-btn>
   0. </center>
    </v-col>
      
      <v-col> <center>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Humedad en tierra</strong></center></v-sheet>
        <v-slider   v-model="value"  step="10"  thumb-label   ticks></v-slider>
      <v-btn depressed>
      prueba
      </v-btn>
      </center></v-col>
      <v-responsive width="100%"></v-responsive>
      

      <v-col> <center>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Iluminacion</strong></center></v-sheet>
        <v-slider   v-model="value"  step="10"  thumb-label   ticks></v-slider>
      <v-btn depressed>
      prueba
    </v-btn>
     </center></v-col>

      <v-col><center><v-sheet :width="100" color="#DBF9FC"><center><strong>Temperatura</strong></center></v-sheet>
        


      </center></v-col>
    </v-row>

  </v-app>
</div>
 

  </v-main>
      </template>
    
    <script>
    export default {
      data: () => ({
        tipocontrol: ['Automatico', 'Manual'],
        tipocultivo: ['cultivo1','cultivo2','cultivo3'],

      }),
    }
  </script>