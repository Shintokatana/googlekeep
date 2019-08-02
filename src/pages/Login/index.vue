<template>
    <div class="login">
        <h1>Login</h1>
        <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required>
        </v-text-field>
        <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required>
        </v-text-field>
        <v-btn class="mr-4" @click="login">Login</v-btn>
        <router-link :to="{ name: 'singUp' }"><v-btn class="mr-4">Sign Up</v-btn></router-link>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "index",

        data: () => ({
            email: '',
            password: '',
        }),
        methods: {
            login: function () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password);
            }
        }
    }
</script>

<style scoped lang="scss">

    .login {
        max-width: 600px;
        margin: 30px auto auto;
    }

</style>
