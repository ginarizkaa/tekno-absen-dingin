<template>
  <div class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <div style="text-align:center;">
        <h3>Main Menu</h3>
      </div>
      <div class="column" style="height: 250px;text-align:center;">
        <div class="col">
          <q-btn color="primary" label="ABSEN" style="width:60%;" to="/absen"/>
        </div>
        <div class="col">
          <q-btn color="primary" label="IZIN CUTI" style="width:60%;" to="/izincuti"/>
        </div>
        <div class="col">
          <q-btn color="primary" label="APPROVAL" style="width:60%;" to="/approval"/>
        </div>
        <div class="col">
          <q-btn color="primary" label="APPROVAL CUTI" style="width:60%;" to="/approvecuti"/>
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