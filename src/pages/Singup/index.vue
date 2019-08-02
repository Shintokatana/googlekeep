<template>
    <div class="singup">
        <h1>Sing Up</h1>
        <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required>
        </v-text-field>
        <v-text-field
                v-model="password"
                type="password"
                label="Password"
                required>
        </v-text-field>
        <v-btn class="mr-4" @click="signUp">SignUp</v-btn>
        <router-link :to="{ name: 'login' }"><v-btn class="mr-4">To go Login</v-btn></router-link>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "index",
        data:() => ({
            email: '',
            password: ''
        }),
        methods: {
            signUp() {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
            }
        }
    }
</script>

<style scoped lang="scss">

    .singup {
        max-width: 600px;
        margin: 30px auto auto;
    }

</style>
