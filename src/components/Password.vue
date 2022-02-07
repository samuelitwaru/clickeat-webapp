<template>
<v-card class="mx-auto my-4 pa-4" width="400px">
    <v-form ref="form">
        <v-text-field name="oldPassword"  v-model="oldPassword" label="Enter your password" type="password"></v-text-field>
        <v-text-field name="newpassword"  v-model="newPassword" label="Enter your password" type="password"></v-text-field>
        <v-text-field name="rePssword"  v-model="rePassword" label="Confirm your password" type="password"></v-text-field>

        <div>
          <v-btn color="primary" class="mr-4" @click='changePassword'>Change Password</v-btn>
        </div>
      </v-form>
</v-card>
</template>

<script>
export default {
    data() {
        return {
            oldPassword: '',
            newPassword: '',
            rePassword: ''
        }
    },

    methods: {
        changePassword() {
            console.log('hello');
        }
    },
}
</script>

<style>

</style>