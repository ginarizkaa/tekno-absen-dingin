<template>
  <div class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px;width:100%;text-align:center;">
      <strong style="font-size:30px;font-family: cursive;" >Reset Password</strong>
  
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="lastPassword"
          label="Current Password *"
          type="password"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Tolong isi password anda saat ini']"
        />

        <q-input
          filled
          v-model="NewPassword"
          label="New Password *"
          type="password"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Tolong isi password anda yang baru']"
        />

        <q-input
          filled
          v-model="NewPassword2"
          label="Rewrite New Password *"
          type="password"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Tolong isi password anda yang baru']"
        />

        <div>
          <q-btn label="Submit" type="submit" color="secondary" />
          <q-btn label="Reset" type="reset" color="white" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<style>
.q-field--filled .q-field__control {
    background: white !important;
}
.q-field__native, .q-field__prefix, .q-field__suffix {
    color: black !important;
}
.q-field__bottom {
    color: white !important;
}
</style>

<script>
import datauser_api from '../api/datauser/index';

export default {
  name: "ResetPassword",
  data() {
    return {
      lastPassword: "",
      NewPassword: "",
      NewPassword2: ""

    };
  },

  methods: {
    onSubmit() {
        let self = this;
        
        if (JSON.parse(this.$ls.get("dataUserNow")).password===self.lastPassword && self.NewPassword===self.NewPassword2) {
          let param = {
            nama: JSON.parse(this.$ls.get("dataUserNow")).nama,
            username: JSON.parse(this.$ls.get("dataUserNow")).username,
            password: self.NewPassword,
            roles: JSON.parse(this.$ls.get("dataUserNow")).roles,
            id: JSON.parse(this.$ls.get("dataUserNow")).id,
            idSpv: JSON.parse(this.$ls.get("dataUserNow")).idSpv
          }

          datauser_api
            .putDataUser(window, param)
            .then(function(result) {
              self.$ls.remove("dataUserNow")
              self.$ls.remove("userNow")
              self.$router.push("/")
              self.$q.notify({
                color: "blue",
                textColor: "white",
                message: "Password Updated!"
              });
              return result;
            })
            .catch(function(err) {
              console.log(err);
            });
          
        }
        else {
          self.$q.notify({
            color: "red-5",
            textColor: "white",
            message: "Wrong Current Password and New Password!"
          });
          
        }
    
    },

    onReset() {
      this.lastPassword = null;
      this.NewPassword = null;
      this.NewPassword2 = null;
    }
  },

  beforeCreate(){

  }
};
</script>
