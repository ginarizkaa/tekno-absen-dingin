<template>
    <q-footer>
      <q-toolbar>
        <q-btn flat icon="navigate_before" @click="$router.go(-1)"/>
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
      this.$router.push("/")
    }
  }
}
</script>
