<template>
  <div
    class="red"
  >
    <v-container 
      background-color="red"
    >
      <v-row
      class="mb-2">
        <v-col class="group pa-2">
          <span>Mas escuchados en : </span> {{ msg }}
          <v-btn @click='pasar()' icon color="blue" class="mb-3">
            <v-icon x-large>mdi-thumb-up</v-icon>
          </v-btn>
        </v-col>
          
      </v-row>
      
    </v-container>
    
    <v-list>
        <v-list-item
          v-for="artist in artists"
          :key="artist.name"
        >

        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-folder
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="artist.name"></v-list-item-title>

          <v-list-item-subtitle>
            <a :href="artist.url" target="_blank">{{ artist.url }}</a>
          </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

    </v-list>
  </div>
    
</template>

<script>
import getArtists from '@/api/index'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        artists: [],
        dato: 0
      }
    },
    mounted:
      function () {
        //const self = this
        getArtists()
          .then ( art => {
            this.artists = art
          })
    },

    methods: {
      pasar () {
        this.dato = this.dato+1
        let dat = this.dato   
        this.$emit('enviarAPadre', dat)
      }
    },
  }
</script>