<template>
  <div class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px;width:100%;text-align:center;">
      <img src="../assets/tekno.png" alt="Logo Tekno" height="80" width="300" margin="20px" />

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="username"
          label="Username *"
          hint="Your Username"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          v-model="password"
          label="Password *"
          hint="Your password"
          type="password"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <div>
          <q-btn label="Login" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<style>
</style>

<script>
import login_api from '../api/login/index';

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      userNow:""
    };
  },
  computed: {
    kakion() {
      kaki: false
      return kaki
    }
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
              icon: "fas fa-exclamation-triangle",
              message: "username atau password salah, tolong"
            });
          } else {
            self.$q.notify({
              color: "green-4",
              textColor: "white",
              icon: "fas fa-check-circle",
              message: "kamu telah login"
            });
            self.$ls.set("userNow", result.id);
            // console.log("id nya dia = ", self.$ls.get("userNow"))
            self.$router.push("mainmenu");
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
