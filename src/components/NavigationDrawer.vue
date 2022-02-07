<template>
    <div>
        <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-navigation</v-icon>
        </v-btn>

        <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        right
        >
        <v-list-item>
            <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item link>
            <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
 data() {
     return {
        drawer: null
     }
 },
}
</script>

<style>

</style>