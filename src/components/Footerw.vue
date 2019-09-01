<template>
    <q-footer>
      <q-toolbar elevated class="bg-black">
        <q-btn flat icon="navigate_before" to="/mainmenu"/>
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
