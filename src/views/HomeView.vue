<template>
  <v-main>
    
    <v-row>
      <v-col cols="6" md="4">
        <v-card>
          <v-card-title>Temperatura Ambiente</v-card-title>
          <v-card-text></v-card-text>
          <v-progress-circular
                              :rotate="360"
                              :size="125"
                              :width="15"
                              :value="form.temperatura"
                              color="teal"
                            >
                              {{ form.temperatura }}
                            </v-progress-circular>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card>
          <v-card-title>Humedad Ambiente</v-card-title>
          <v-card-text></v-card-text>
          <v-progress-circular
                              :rotate="360"
                              :size="125"
                              :width="15"
                              :value="form.humedadambiente"
                              color="teal"
                            >
                              {{ form.humedadambiente }}
                            </v-progress-circular>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card>
          <v-card-title>Iluminación</v-card-title>
          <v-card-text></v-card-text>
          <v-progress-circular
                              :rotate="360"
                              :size="125"
                              :width="15"
                              :value="form.luz1"
                              color="teal"
                            >
                              {{ form.luz1 }}
                            </v-progress-circular>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card>
          <v-card-title>Humedad en tierra sector izquierdo</v-card-title>
          <v-card-text></v-card-text>
          <v-progress-circular
                              :rotate="360"
                              :size="125"
                              :width="15"
                              :value="form.humedadIzquierda"
                              color="teal"
                            >
                              {{ form.humedadIzquierda }}
                            </v-progress-circular>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card>
          <v-card-title></v-card-title>
          <v-card-text></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card>
          <v-card-title>Humedad en tierra sector derecho</v-card-title>
          <v-card-text></v-card-text>
          <v-progress-circular
                              :rotate="360"
                              :size="125"
                              :width="15"
                              :value="form.humedadDerecha"
                              color="teal"
                            >
                              {{ form.humedadDerecha }}
                            </v-progress-circular>
        </v-card>
      </v-col>
    
    </v-row>
    <footerCustom></footerCustom>
  </v-main>
</template>

<script>
// import router from '@/router';
import footerCustom from "./footerApp.vue";
import servicioConsulta from "../services/consultaService";
import moment from "moment";

export default {
  data: () => ({
    drawer: false,
    group: null,
    form:{},
    arreglo: [
      {
        icon: "mdi-database-search",
        name: "Consultas",
        route: "consultas",
      },
      {
        icon: "mdi-monitor-dashboard",
        name: "Control",
        route: "control",
      },
      {
        icon: "mdi-sun-thermometer-outline",
        name: "Configuracion",
        route: "configuracion",
      },
    ],
  }),
  components: {
    footerCustom,
  },
  methods: {
    routeNav(route) {
      this.$router.push({ name: route });
    },
  async ultimoControl() {
      const {
        data: { BOMBAAGUA, EXTRACTOR, FECHA, ILUMINACION },
      } = await servicioConsulta.ultimoControl();

      const {
        data: [last],
      } = await servicioConsulta.getLastData({ elements: 1, pagination:false });

      const { TAMB1, TAMB2, HTD1, HTD2, HTI1, HTI2, LUM1, HAMB1, HAMB2 } = last;

      const reformatData = {
        luces: ILUMINACION,
        climatizacion: EXTRACTOR,
        humedad: BOMBAAGUA,
        temperatura: (TAMB1 + TAMB2) / 2,
        fecha: moment(FECHA).format("DD/MM/YYYY HH:mm:ss"),
        humedadDerecha: (HTD1 + HTD2) / 2,
        humedadIzquierda: (HTI1 + HTI2) / 2,
        luz1: LUM1,
        humedadambiente: (HAMB1 + HAMB2) /2
      };
      this.form = reformatData;
    },
  },
  async created(){
    await this.ultimoControl()
  }
};
</script>

<style>
Body {
  background-color: #dbf9fc;
}
</style>