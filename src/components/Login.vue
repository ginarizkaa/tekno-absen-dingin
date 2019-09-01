<template>
  <div class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px;width:100%;text-align:center;">
      <img src="../assets/tekno.png" alt="Logo Tekno" height="80" width="300" style="margin-bottom:20px"/>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="username"
          label="Username *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Tolong isi username anda']"
        />

        <q-input
          filled
          v-model="password"
          label="Password *"
          type="password"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Tolong isi password anda']"
        />

        <div>
          <q-btn label="Login" type="submit" color="secondary" />
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
import login_api from '../api/login/index';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      userNow:"",
      roles:""
    };
  },

  methods: {
    onSubmit() {
      let self = this;

      login_api
        .getLogin(window, self.username, self.password)
        .then(function(result) {
          if (!result) {
            self.$q.notify({
              color: "red-5",
              textColor: "white",
              message: "Wrong Username and Password!"
            });
          } else {
            //console.log("roles nya adalah = ", result.roles)
            if(result.roles==="Karyawan"){
              self.$ls.set("userNow", result.id);
              console.log("user skrg karyawan = ",self.$ls.get("userNow"))
              self.$router.push("mainmenu");
            }if (result.roles==="Admin") {
              self.$ls.set("userNow", result.id);
              //console.log("user skrg = ",self.$ls.get("userNow"))
              self.$router.push("admin");
            } else {
              //doNothing
            }
            self.$q.notify({
              color: "green",
              textColor: "white",
              message: "You're Logged In"
            });
          }
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    onReset() {
      this.username = null;
      this.password = null;
    }
  }
};
</script>
