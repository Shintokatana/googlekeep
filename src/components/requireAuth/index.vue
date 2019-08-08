<template>
    <div>
        <g-signin-button
                :params="googleSignInParams"
                @success="onSignInSuccess"
                @error="onSignInError"
                v-if="!authStat">
            Sign in with Google
        </g-signin-button>
    </div>
</template>

<script>

    export default {
        name: "index",
        components: {
        },
        data() {
            return {
                googleSignInParams: {
                    client_id: "676292112942-elg6tilkpoouvlpp91369rotm269hr21.apps.googleusercontent.com",
                }
            }
        },
        computed: {
            authStat() {
                return this.$store.getters.getAuth
            }
        },
        methods: {
            onSignInSuccess (googleUser) {
                let data = {
                    loginHint: googleUser.getAuthResponse().login_hint,
                    authStatus: true
                };
                this.$store.dispatch('setAuth', data ).then(
                    this.$store.commit('userMetaData', googleUser.getBasicProfile())
                );
            },
            onSignInError () {
            },
        },
    }
</script>

<style scoped lang="scss">

    .g-signin-button {
        cursor: pointer;
        display: inline-block;
        padding: 4px 8px;
        border-radius: 3px;
        background-color: #3c82f7;
        color: #fff;
        box-shadow: 0 3px 0 #0f69ff;
    }

</style>
