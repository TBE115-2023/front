<template>
    <div>
        
<v-app-bar  absolute color="#78909C" dark  src="https://picsum.photos/1920/1080?random">       
        <!-- scroll-target="#scrolling-techniques-2" -->
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

            <v-list-item v-for="(ruta,index) in arreglo" :key="index" @click="routeNav(ruta.route)">
              <v-list-item-icon>
              <v-icon>{{ruta.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title> {{ruta.name}} </v-list-item-title>
                                   
            </v-list-item>
  
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>
// import router from '@/router';

  export default {
    data: () => ({
      drawer: false,
      group: null,
      links: [
        'GITHUB',
        'GOOGLE DRIVE',
        'ACERCA DE',
      ],
      arreglo:[
      {
          icon:"mdi-home",
          name:"Inicio",
          route:"home"
        },
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
        },
        {
          icon:"mdi-sun-thermometer-outline",
          name:"Log del sistema",
          route:"logs"
        },
      ]
    }),
    methods:{
      routeNav(route){
        this.$router.push({name:route})
      }
    }
  }
</script>