<template>
  <v-app>
    <v-app-bar
      app
      color="#808D96FF"
      dark
      height="150px"
    > 
      <div class="d-flex align-center">
        <v-img
          alt="Logo Minerva"
          class="shrink mr-2"
          contain
          src="https://toppng.com/public/uploads/thumbnail/logo-de-la-universidad-de-el-salvador-11550106387ogbr170w2c.png"
          transition="scale-transition"
          width="120"
        />

        <v-img
          alt="Logo FIA"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://static.wixstatic.com/media/43fddb_464559c103234b019414515c327f5552~mv2.png/v1/fill/w_144,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1_%20Logo%20Azul_0_3x.png"
          width="140"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://drive.google.com/drive/u/2/folders/1y_A4lLydFTyHeYEGNp3kRx_FMciVYEXv"
        target="_blank"
        text
      >
        <span class="mr-2">Proyecto de ingenieria 2</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>


<div id="app">
  <v-app id="inspire">
    <v-card
      class="mx-auto overflow-hidden"
      height="400"
    >
      <v-app-bar
        color="deep-purple"
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Title</v-toolbar-title>
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
  
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-app>
</div>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
