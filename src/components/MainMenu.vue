<template>
  <div class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <div style="text-align:center;">
        <h3>Main Menu</h3>
      </div>
      <div>{{ idUserNow }}</div>
      <div class="column" style="height: 150px;text-align:center;">
        <div class="col">
          <q-btn color="primary" label="ABSEN" to="/absen"/>
        </div>
        <div class="col">
          <q-btn color="primary" label="IZIN CUTI" to="/izincuti"/>
        </div>
        <div class="col">
          <q-btn color="primary" label="APPROVAL" to="/approval"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  computed:{
    idUserNow(){
      var idnya = this.$ls.get("userNow")
      return idnya;
    }
    
  }
}
</script>