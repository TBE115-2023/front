<template>
  <v-app>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <span class="d-flex justify-center">Administración</span>
          </v-card-title>
          <v-card-text>
            <v-select
              item-value="id"
              item-text="nombre"
              v-model="tipoCultivoVariable"
              :items="tipocontrol"
              filled
              label="Tipo de control"
            >
            </v-select>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="tipoCultivoVariable === 1">
      <v-col>
        <v-card color="#DBF9FC" elevation="4" outlined>
          <v-card-title class="d-flex justify-center">
            <strong
              >Control Automatico ejecutado cada
              {{ valorEjecucion_automatico }} minutos</strong
            >
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="valorEjecucion_automatico"
                  label="Digite la frecuencia de actualización"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-select :items="tipocultivo" filled label="Tipo de cultivo">
                </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col height="auto" cols="6" md="4">
                <v-card elevation="4" outlined>
                  <v-card-title>
                    <strong>Climatizacion</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-progress-circular
                      :rotate="360"
                      :size="125"
                      :width="15"
                      :value="form.climatizacion"
                      color="teal"
                    >
                      {{ form.climatizacion }}
                    </v-progress-circular>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card elevation="4" outlined>
                  <v-card-title>
                    <strong>Humedad de tierra</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-progress-circular
                      :rotate="360"
                      :size="125"
                      :width="15"
                      :value="form.humedad"
                      color="teal"
                    >
                      {{ form.humedad }}
                    </v-progress-circular>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card elevation="4" outlined>
                  <v-card-title>
                    <strong>Iluminación</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-chip :color="form.luces ? 'green' : 'orange'">{{
                      form.luces ? "Encendido" : "Apagado"
                    }}</v-chip>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card elevation="4" outlined>
                  <v-card-title>
                    <strong>Temperatura</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-progress-circular
                      :rotate="360"
                      :size="125"
                      :width="15"
                      :value="form.temperatura"
                      color="teal"
                    >
                      {{ form.temperatura }}
                    </v-progress-circular>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="tipoCultivoVariable === 2">
      <v-col>
        <v-card>
          <v-card-title>
            <strong>Control Manual</strong>
          </v-card-title>
          <v-card-text>
            <v-card cols="6" md="4"> </v-card>
            <v-row>
              <v-col cols="6" md="4">
                <v-card class="">
                  <v-card-title>
                    <strong>Climatizacion</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-progress-circular
                      :rotate="360"
                      :size="125"
                      :value="form.climatizacion"
                      color="teal"
                    >
                      <v-text-field
                        class="small-text-field"
                        v-model="form.climatizacion"
                      />
                    </v-progress-circular>
                    <v-btn depressed> prueba </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card>
                  <v-card-title>
                    <strong>Humedad en tierra</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-progress-circular
                      :rotate="360"
                      :size="125"
                      :value="form.humedad"
                      color="teal"
                    >
                      <v-text-field
                        class="small-text-field"
                        v-model="form.humedad"
                      />
                    </v-progress-circular>
                    <v-btn depressed> prueba </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card>
                  <v-card-title>
                    <strong>Iluminacion</strong>
                  </v-card-title>
                </v-card>
                <v-card-text>
                  <!-- <v-slider v-model="iluminacion" step="10" thumb-label ticks></v-slider> -->
                  <v-switch
                    v-model="form.luces"
                    label="Control de luces"
                  ></v-switch>
                  <v-btn depressed> prueba </v-btn>
                </v-card-text>
              </v-col>
              <v-col cols="6" md="4">
                <v-card>
                  <v-card-title>
                    <strong>Temperatura</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-progress-circular
                      :rotate="360"
                      :size="125"
                      :value="form.temperatura"
                      color="teal"
                    >
                      {{ form.temperatura }}
                    </v-progress-circular>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="enviarConfiguracionManual" class="primary" block
              >Enviar actualización</v-btn
            >
          </v-card-actions>
          <v-dialog v-model="dialogo">
            <v-card>
              <v-card-title>
                {{
                  this.errores.length > 0
                    ? "Verifique los siguientes errores"
                    : "Verifique que los valores a enviar son correctos"
                }}
              </v-card-title>
              <v-card-text v-if="this.errores.length > 0">
                <v-list>
                  <v-list-item v-for="(error, index) in errores" :key="index">
                    <v-list-item-avatar>
                      <v-icon>mdi-minus</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title>
                      {{ error }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-text v-else>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-plus</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title> Climatización </v-list-item-title>
                    <v-list-item-subtitle>{{
                      form.climatizacion
                    }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-plus</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title> Luces </v-list-item-title>
                    <v-list-item-subtitle>{{
                      form.luces ? "Encendido" : "Apagada"
                    }}</v-list-item-subtitle>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-icon>mdi-plus</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title> Humedad </v-list-item-title>
                    <v-list-item-subtitle>{{
                      form.humedad
                    }}</v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
              <v-card-actions v-if="this.errores.length > 0">
                <v-btn class="secondary" @click="dialogo = false" block
                  >Cerrar</v-btn
                >
              </v-card-actions>
              <v-card-actions v-else>
                <v-row>
                  <v-col cols="6" md="6">
                    <v-btn @click="dialogo = false" class="secondary" block
                      >Cancelar</v-btn
                    >
                  </v-col>
                  <v-col cols="6" md="6">
                    <v-btn @click="dialogo = false" class="primary" block
                      >enviar</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>
<script>
import servicioConsulta from "../services/consultaService";

export default {
  data: () => ({
    tipocontrol: [
      {
        id: 1,
        nombre: "Automatico",
      },
      {
        nombre: "Manual",
        id: 2,
      },
    ],
    tipocultivo: ["cultivo1", "cultivo2", "cultivo3"],
    tipoCultivoVariable: 1,
    valorEjecucion_automatico: 10,
    form: {
      luces: true,
      climatizacion: 18,
      humedad: 18,
      temperatura: 10,
    },
    dialogo: false,
    errores: [],
    rulesClimatizacion: [
      (value) => {
        if (value) return true;
        return "Debe ingresar un valor.";
      },
    ],
  }),
  methods: {
    enviarConfiguracionManual() {
      this.errores = [];
      this.validadHumedad();
      this.validarClimatizacion();
      this.dialogo = true;
    },
    validarClimatizacion() {
      if (
        this.form.climatizacion === null ||
        this.form.climatizacion === undefined ||
        this.form.climatizacion === ""
      )
        this.agregarError("No se ha especificado un valor de climatización");
      if (this.form.climatizacion > 45)
        this.agregarError("El valor de la climatización debe ser menor a 45");
      if (this.form.climatizacion < 15)
        this.agregarError("El valor de la climatización debe ser mayor a 15 ");
    },
    validadHumedad() {
      if (
        this.form.humedad === null ||
        this.form.humedad === undefined ||
        this.form.humedad === ""
      )
        this.agregarError("No se ha especificado un valor de humedad");
      if (this.form.humedad > 45)
        this.agregarError("El valor de la humedad debe ser menor a 45");
      if (this.form.humedad < 15) {
        this.agregarError("El valor de la humedad debe ser mayor a 15");
      }
    },
    async guardarDatos() {
      await this.servicioConsulta.enviarConfiguracionControl(this.form);
    },
    async cargarDatos(){
      const {data}=await this.servicioConsulta.cargarDatos()
    },
    agregarError(errorAgregar) {
      console.log(errorAgregar);
      if (!this.errores.find((error) => error === errorAgregar))
        this.errores.push(errorAgregar);
      console.log(this.errores);
    },
  },
  computed: {
    temperatura_promedio: function () {
      return (this.temperatura_exterior - this.temperatura_interior) / 2;
    },
  },
};
</script>
<style scoped>
.small-text-field {
  width: 30px;
}
</style>
