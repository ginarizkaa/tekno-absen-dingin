<template>
    <q-footer elevated class="bg-black">
      <q-toolbar>
        <q-btn flat icon="account_circle" to="/status"/>
        <q-space></q-space>
        <q-btn flat icon="exit_to_app" @click="logout()"/>
      </q-toolbar>
    </q-footer>    
</template>

<script>
export default {
  methods:{
    logout(){
      this.$ls.remove("userNow")
      this.$ls.remove("dataUserNow")
      this.$router.push("/")
    }
  }
}
</script>
