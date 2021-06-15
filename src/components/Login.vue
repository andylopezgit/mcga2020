<template>
    <v-container>
        <div
            class="ma-10">
            <v-row
            justify="center"
        >
            
            <v-col cols="6"
            >
                <v-form
                    >
                    <v-row>
                        <v-text-field
                        label="Usuario"
                        v-model="user"
                    >
                    </v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field
                        label="Contraseña"
                        v-model="pass"
                    >
                    </v-text-field>
                    </v-row>
                     <v-row
                        justify="end"
                        >
                     <v-col>
                         <v-btn
                         disabled>Resetear Contraseña</v-btn>
                     </v-col>
                     <v-col
                     align="end">
                         <v-btn left color="success">Iniciar</v-btn>
                     </v-col>
                        
                         
                     </v-row>
                    
                </v-form>
            </v-col>
        </v-row>
        </div>
        
    </v-container>
</template>

<script>
export default {
    name: "Login"
}
</script>