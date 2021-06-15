<template>
    <v-container
        fluid>
        <v-row
            class="ma-10">
            <v-col>
                <Login/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Login from '../components/Login.vue'
export default {
    name: "LoginView",
    components: {
        Login
    }
}
</script>