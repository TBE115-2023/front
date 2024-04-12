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
          <v-card-actions>
            <v-btn color="red" @click="panicConfirmacion = true">
              <v-icon>mdi-power-plug-off-outline</v-icon>
              Apagado total</v-btn
            >
            <v-btn color="green" @click="encenderTodoConfirmacion = true">
              <v-icon>mdi-power-plug-outline</v-icon>
              Encendido total
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="tipoCultivoVariable === 1">
      <v-col cols="12" md="12">
        <span>{{ form.fecha }}</span>
      </v-col>
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
                  @change="bucleCadaMinutos"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" md="4">
                <v-card>
                  <v-card-title> Humedad en tierra </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="6" md="6">
                        <v-card>
                          <v-card-title class="break-word"
                            >Izquierda</v-card-title
                          >
                          <v-card-text>
                            <v-progress-circular
                              :rotate="360"
                              :size="125"
                              :width="15"
                              :value="form.humedadIzquierda"
                              color="teal"
                            >
                              {{ form.humedadIzquierda }}
                            </v-progress-circular>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="6" md="6">
                        <v-card>
                          <v-card-title>Derecha</v-card-title>
                          <v-card-text>
                            <v-progress-circular
                              :rotate="360"
                              :size="125"
                              :width="15"
                              :value="form.humedadDerecha"
                              color="teal"
                            >
                              {{ form.humedadDerecha }}
                            </v-progress-circular>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card elevation="4" outlined>
                  <v-card-title>
                    <strong>Flujo de aire</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-chip :color="form.climatizacion ? 'green' : 'orange'">{{
                      form.climatizacion ? "Encendido" : "Apagado"
                    }}</v-chip>
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
              <v-col height="auto" cols="6" md="4">
                <v-card elevation="4" outlined>
                  <v-card-title>
                    <strong>Bomba de agua</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-chip :color="form.humedad ? 'green' : 'orange'">{{
                      form.humedad ? "Encendido" : "Apagado"
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
                    <strong>Flujo de Aire</strong>
                  </v-card-title>
                  <v-card-text>
                    <!-- <v-slider v-model="iluminacion" step="10" thumb-label ticks></v-slider> -->
                    <v-switch
                      v-model="form.climatizacion"
                      label="Control de extractor"
                    ></v-switch>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card>
                  <v-card-title>
                    <strong>Humedad en tierra</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-switch v-model="form.humedad" label="Humedad en tierra">
                    </v-switch>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6" md="4">
                <v-card>
                  <v-card-title>
                    <strong>Iluminacion</strong>
                  </v-card-title>
                  <v-card-text>
                    <v-switch
                      v-model="form.luces"
                      label="Control de luces"
                    ></v-switch>
                  </v-card-text>
                </v-card>
                <v-card-text>
                  <!-- <v-slider v-model="iluminacion" step="K10" thumb-label ticks></v-slider> -->
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
              <v-col cols="6" md="4">
                <v-card>
                  <v-card-title> Humedad en tierra </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col cols="6" md="6">
                        <v-card>
                          <v-card-title class="break-word"
                            >Izquierda</v-card-title
                          >
                          <v-card-text>
                            <v-progress-circular
                              :rotate="360"
                              :size="125"
                              :width="15"
                              :value="form.humedadIzquierda"
                              color="teal"
                            >
                              {{ form.humedadIzquierda }}
                            </v-progress-circular>
                          </v-card-text>
                        </v-card>
                      </v-col>
                      <v-col cols="6" md="6">
                        <v-card>
                          <v-card-title>Derecha</v-card-title>
                          <v-card-text>
                            <v-progress-circular
                              :rotate="360"
                              :size="125"
                              :width="15"
                              :value="form.humedadDerecha"
                              color="teal"
                            >
                              {{ form.humedadDerecha }}
                            </v-progress-circular>
                          </v-card-text>
                        </v-card>
                      </v-col>
                    </v-row>
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
        </v-card>
      </v-col>
    </v-row>
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
              <v-list-item-title> Flujo de aire </v-list-item-title>
              <v-list-item-subtitle>{{
                form.climatizacion ? "Encendido" : "Apagada"
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
                form.humedad ? "Encendido" : "Apagada"
              }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions v-if="this.errores.length > 0">
          <v-btn class="secondary" @click="dialogo = false" block>Cerrar</v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-row>
            <v-col cols="6" md="6">
              <v-btn @click="dialogo = false" class="secondary" block
                >Cancelar</v-btn
              >
            </v-col>
            <v-col cols="6" md="6">
              <v-btn @click="guardarDatos" class="primary" block>enviar</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="panicConfirmacion">
      <v-card>
        <v-card-title>¿Desea apagar todo el sistema?</v-card-title>
        <v-card-text>
          Se deberá proceder a inspeccionar el sistema para poder ponerlo en
          marcha nuevamente
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" @click="enviarApagado">Apagar el sistema</v-btn>
          <v-btn color="green" @click="panicConfirmacion = false"
            >Continuar con la actividad actual</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="encenderTodoConfirmacion">
      <v-card>
        <v-card-title
          >¿Desea encender automáticamente todo el sistema?</v-card-title
        >
        <v-card-text>
          Debe tener en cuenta que debe haber revisado cada sección para
          proceder
        </v-card-text>
        <v-card-actions>
          <v-btn color="red" @click="enviarEncendido"
            >Encender el sistema</v-btn
          >
          <v-btn color="green" @click="encenderTodoConfirmacion = false"
            >Continuar con la actividad actual</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
//import servicioConsulta from "../services/consultaService";
import servicioConsulta from "../services/consultaService";
import moment from "moment";
export default {
  data: () => ({
    panicConfirmacion: false,
    encenderTodoConfirmacion: false,
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
    tipoCultivoVariable: null,
    valorEjecucion_automatico: 10,
    form: {
      luces: true,
      climatizacion: 18,
      humedad: 18,
      temperatura: 10,
    },
    bucle: null,
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
        this.agregarError("El valor de la Temp. ambiente debe ser menor a 45");
      if (this.form.climatizacion < 15)
        this.agregarError("El valor de la Temp. ambiente debe ser mayor a 15 ");
    },
    async guardarDatos() {
      await this.escribirControl({
        bomba: this.form.humedad,
        iluminacion: this.form.luces,
        extractor: this.form.climatizacion,
      });
      await this.ultimoControl();
      this.dialogo = false;
    },
    async escribirControl(data) {
      const { data: respuesta } = await servicioConsulta.escribirControl(data);
      alert(respuesta);
    },
    async enviarApagado() {
      this.panicConfirmacion = false;
      await this.escribirControl({
        bomba: 0,
        iluminacion: 0,
        extractor: 0,
      });
      await this.ultimoControl();
    },
    async enviarEncendido() {
      this.encenderTodoConfirmacion = false;
      await this.escribirControl({
        bomba: 1,
        iluminacion: 1,
        extractor: 1,
      });
      await this.ultimoControl();
    },
    async ultimoControl() {
      const {
        data: { BOMBAAGUA, EXTRACTOR, FECHA, ILUMINACION },
      } = await servicioConsulta.ultimoControl();

      const {
        data: [last],
      } = await servicioConsulta.getLastData({ elements: 1, pagination:false });

      const { TAMB1, TAMB2, HTD1, HTD2, HTI1, HTI2 } = last;

      const reformatData = {
        luces: ILUMINACION,
        climatizacion: EXTRACTOR,
        humedad: BOMBAAGUA,
        temperatura: (TAMB1 + TAMB2) / 2,
        fecha: moment(FECHA).format("DD/MM/YYYY HH:mm:ss"),
        humedadDerecha: (HTD1 + HTD2) / 2,
        humedadIzquierda: (HTI1 + HTI2) / 2,
      };
      this.form = reformatData;
    },
    async bucleCadaMinutos() {
      clearInterval(this.bucle);
      this.bucle = setInterval(
        this.ultimoControl,
        this.valorEjecucion_automatico * 60 * 1000
      );
    },
    agregarError(errorAgregar) {
      if (!this.errores.find((error) => error === errorAgregar))
        this.errores.push(errorAgregar);
    },
  },
  watch: {
    tipoCultivoVariable: {
      handler(val) {
        if (val === 2) {
          clearInterval(this.bucle);
        } else {
          this.ultimoControl();
          this.bucleCadaMinutos();
        }
      },
    },
  },
  computed: {
    temperatura_promedio: function () {
      return (this.temperatura_exterior - this.temperatura_interior) / 2;
    },
  },
  async created() {
    await this.ultimoControl();
    this.bucleCadaMinutos();
  },
};
</script>
<style scoped>
.small-text-field {
  width: 30px;
}
.break-word {
  word-break: break-all;
}
</style>
