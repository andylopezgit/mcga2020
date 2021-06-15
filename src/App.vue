<template>
  <v-app>
    <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>AndyMusic App</v-toolbar-title>

      <v-spacer></v-spacer>
        <router-link to="/" class="ma-2">Home</router-link>
        <router-link to="/tareas" class="ma-2">TareApp</router-link>
        <router-link to="/about" class="ma-2">MusicApp</router-link>
        <router-link to="/login" class="ma-2">Login</router-link>
    </v-toolbar>
  </v-card>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>