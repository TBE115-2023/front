<template>
 
 <v-main>
    <v-card   height="50" color="#DBF9FC"><center><strong>Control Automatico ejecutado cada x minutos</strong></center></v-card>
    
    
    <v-row>
        <v-col style = "height: 175px;"> <center>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Temperatura</strong></center></v-sheet>
        <v-progress-circular  :rotate="360"   :size="125"  :width="15"  :value="value"    color="teal" >
          {{ 37 }}
        </v-progress-circular>
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
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Temperatura</strong></center></v-sheet>
        <v-progress-circular  :rotate="360"   :size="125"  :width="15"  :value="value"    color="teal" >
          {{ 37 }}
        </v-progress-circular>
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

  </v-main>



      </template>
    

