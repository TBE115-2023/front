<template>
  <div>
    <v-layout style="overflow: hidden">
      <v-app-bar  absolute color="#78909C" dark  src="https://picsum.photos/1920/1080?random" scroll-target="#scrolling-techniques-2">       
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title > Datos de Invernadero</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title>  Sistema Invernadero automatizado </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title></v-toolbar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer"  absolute  temporary>  
        <v-list nav dense>  
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Datos de invernadero</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Control del Sistema</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Historial</v-list-item-title>
            </v-list-item>
          
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Alarmas</v-list-item-title>
            </v-list-item>    
       
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>    
    </v-layout>


  <v-main>
    <v-card   height="110" color="#DBF9FC"></v-card>
    <v-row>
    
      <v-col style = "height: 175px;"> <center>
        
        <v-progress-circular  :rotate="360"   :size="125"  :width="15"  :value="value"    color="teal" >
          {{ 37 }}
        </v-progress-circular>
       <v-sheet :width="100" color="#DBF9FC"><center><strong>Temperatura</strong></center></v-sheet>
      </center></v-col>
      
      <v-col> <center>
        <v-progress-circular   :rotate="360"   :size="125"  :width="15"   :value="value"  color="teal" > 
          {{ 60 }}
        </v-progress-circular>
        <v-sheet :width="100" color="#DBF9FC"><center><strong> Humedad </strong></center></v-sheet>
      </center></v-col>
     
     <v-responsive width="100%"></v-responsive>
      

      <v-col> <center>
        <v-progress-circular  :rotate="360"  :size="125"   :width="15"   :value="value"   color="teal" >
          {{ 80 }}
         </v-progress-circular>
        <v-sheet :width="100" color="#DBF9FC"><center><strong>Iluminosidad</strong></center></v-sheet>
        </center></v-col>

      <v-col><center>
        <v-progress-circular    :rotate="360"    :size="125"    :width="15"    :value="value"    color="teal" >
         {{ 3  }}
        </v-progress-circular>
       <v-sheet :width="100" color="#DBF9FC"> <center><strong>dias desde sembrado de cultivo</strong></center> </v-sheet>
      </center></v-col>
    </v-row>
  </v-main>

  


  
<v-footer fixed color="#DBF9FC" >
  <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>UNIVERSIDAD DE EL SALVADOR</strong>
        </v-col>
      </v-row>
    
  </v-footer>









</div>








</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      links: [
        'GITHUB',
        'GOOGLE DRIVE',
        'ACERCA DE',
      ],
    }),
  }
</script>

<style>

Body {Background-color : #DBF9FC;}
</style>