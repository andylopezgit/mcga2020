<template>
  <v-container fluid
              class="blue">
      <v-row>
        <v-col cols="12">
          <h2>Ranking Musica</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <span>Seleccione Pais</span>
          <v-select
            :items="country"
            v-model="selected"
          ></v-select>
          {{delhijo}}
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex justify-center mb-6">
          <HelloWorld :msg='selected' @enviarAPadre="delhijo = $event"/>
        </v-col>
        
      </v-row>
  </v-container>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },

  data() {
    return {
      country: ['Argentina', 'España'],
      selected: 'Argentina',
      delhijo: ''
    }
  },

  watch: {
    selected(newVal, oldVal) {
      console.log(' el valor anterirr era: ' + oldVal + ' el valor nuevo es : ' + newVal)
    }
  }
}
</script>
