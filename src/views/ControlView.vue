<template>
   <v-main>
  <h1>Control del sistema</h1>
  <div id="app">
  <v-app id="inspire">
      


    
    
    <v-select  :items="estado" filled label="Estado del sistema">
      </v-select>

    <v-row>
        <v-col style = "height: 175px;"> <center>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Tem. Ambiente (extractor)</strong></center></v-sheet>
       
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

    <v-card   height="50" color="#DBF9FC"><center><strong>Modo Prueba</strong></center></v-card>

    

    <v-row>
        <v-col style = "height: 175px;"> <center>

        <v-sheet :width="100" color="#DBF9FC"><center><strong>Climatizacion</strong></center></v-sheet>
         <v-slider   v-model="value"  step="10"  thumb-label   ticks></v-slider>
      <v-btn depressed>
      prueba
    </v-btn>
    </center>
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


    <template>
  <div>
    <div class="d-flex">
      <v-checkbox v-model="disabled" label="Disabled"></v-checkbox>
    </div>

    <v-expansion-panels v-model="panel" :disabled="disabled" multiple>
      <v-expansion-panel>
        <v-expansion-panel-title
          >Configuración Personalizada</v-expansion-panel-title
        >

        <v-expansion-panel-text>
          <v-sheet :width="100" color="#DBF9FC">
            <strong>Iluminacion</strong></v-sheet
          >
          <v-slider v-model="value" step="10" thumb-label ticks></v-slider>

          <v-sheet :width="100" color="#DBF9FC">
            <strong>Humedad en tierra</strong></v-sheet
          >
          <v-slider v-model="value" step="10" thumb-label ticks></v-slider>

          <v-sheet :width="100" color="#DBF9FC">
            <strong>Temperatura</strong></v-sheet
          >
          <v-slider v-model="value" step="10" thumb-label ticks></v-slider>

          <v-btn> guardar valores</v-btn>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>




  </v-app>
</div>
 

  </v-main>
      </template>
    
    <script>
    export default {
      data: () => ({
        estado: ['Encendido', 'Apagado'],
        tipocultivo: ['cultivo1','cultivo2','cultivo3'],
        panel:[0,1],
        disabled:true,
      }),
    }
  </script>