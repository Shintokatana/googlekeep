<template>
    <div class="text-center">
        <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x>
            <template v-slot:activator="{ on }">
                <v-btn
                        color="indigo"
                        dark
                        v-on="on"
                        block>
                </v-btn>
            </template>

            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <img :src="user.Paa" alt="John">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{user.wea}}</v-list-item-title>
                            <v-list-item-subtitle>{{user.ig}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="signOut">Sign Out</v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        data: () => ({
            fav: true,
            menu: false,
            message: false,
            hints: true
        }),
        computed: {
            user() {
                return this.$store.getters.getUser
            }
        },
        methods: {
            signOut() {
                this.menu = false;
                let auth2 = gapi.auth2.getAuthInstance();
                auth2.disconnect().then(() => {
                    let data = {
                        authStatus: false
                    };
                    this.$store.dispatch('setAuth', data).then(
                        this.$store.commit('userMetaData', {} )
                    );
                })
            }
        }
    }
</script>

<style scoped>

</style>
