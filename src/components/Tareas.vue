<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card elevation-10 width="900px">
          <v-card-title primary-title>
            Manejo de Tareas
          </v-card-title>
          <v-row justify="center" align="center">
            <v-col cols="6">
              <v-card-text>
                <v-text-field
                  name="name"
                  label="Tarea"
                  v-model="task"
                ></v-text-field>
              </v-card-text>
            </v-col>
            <v-col cols="4">
              <v-card-text>
                <v-autocomplete
                label="Ciudad"
                v-model="city"
                :items="cities"
                >
                    
                    
                </v-autocomplete>
              </v-card-text>
            </v-col>
            <v-col cols="2">
              <v-btn class="primary">Agregar</v-btn>
            </v-col>
          </v-row>

          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row
        justify="center">
        <v-col cols="10">
            <v-card
                elevation-10
                width="800px"
            >
                <v-card-title primary-title>
                    Listado de Tareas
                </v-card-title>

            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Tareas",
  data() {
      return {
          cities: ['Rosario', 'Cordoba', 'Capital'],
          city: '',
          task: ''
      }
  },
};
</script>
