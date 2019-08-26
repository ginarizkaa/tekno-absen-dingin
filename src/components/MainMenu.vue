<template>
  <div class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <div style="text-align:center;">
        <h3>Main Menu</h3>
      </div>
      <div v-if="dataUser.roles=='Developer'">
        <div class="column" style="height: 150px;text-align:center;">
          <div class="col">
            <q-btn color="primary" label="ABSEN" style="width:60%;" to="/absen"/>
          </div>
          <div class="col">
            <q-btn color="primary" label="IZIN CUTI" style="width:60%;" to="/izincuti"/>
          </div>
        </div>
      </div>
      <div v-if="dataUser.roles=='Project Manager'">
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
  </div>
</template>

<script>
import datauser_api from '../api/datauser/index'
export default {
  data(){
    return {
      dataUser:[]
    }
  },
  
  beforeCreate(){
    let self = this;

    datauser_api
      .getEmployeeById(window, self.$ls.get("userNow"))
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataUser = res;
        console.log("datanya = ", self.dataUser)
      })
      .catch(function(err) {
        console.log(err);
      });

  }
}
</script>