<template>
<v-footer fixed color="#DBF9FC" >
  <v-row class="pt-0">
    <v-col v-for="(link, index) in links" :key="index">
      <v-btn
          color="white"
          variant="text"
          class="mx-2"
          :rounded="true"        
          @click="routeNav(link.link)"
          >
          {{ link.name }}
        </v-btn>
    </v-col>
  </v-row>
  <v-row justify="center" >
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>UNIVERSIDAD DE EL SALVADOR</strong>
        </v-col>
      </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        {
          name: 'GITHUB',
          link: 'https://github.com/TBE115-2023'
        },
        {
          name:'GOOGLE DRIVE',
          link: 'https://drive.google.com/drive/folders/1cm_GFPqE61-2IXQKM9_EffP4_1LKwAsU?usp=sharing'
        },
        
      ],
    }),
    methods:{
      routeNav(route){
        window.open(route, '_blank');
      }
    }
  }
</script>