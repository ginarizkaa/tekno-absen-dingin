<template>
  <div class="flex flex-center">
    <div class="q-pa-md q-gutter-sm" style="text-align:center;width:100%">
      <div v-if="dataUser.roles=='Developer'">
        <div class="column" style="height: 150px;text-align:center;">
          <div class="col">
            <q-btn color="secondary" style="width:100%;margin-top:8px" to="/absen">
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/absen.png" height="100" width="100">
                </div>
                <div class="col">
                  ABSEN
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col">
            <q-btn color="secondary" style="width:100%;margin-top:20px" to="/izincuti">
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/logo.png" height="100" width="100">
                </div>
                <div class="col">
                  IZIN CUTI
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>
      <div v-if="dataUser.roles=='Project Manager'">       
        <div class="column" style="">
          <div class="col">
            <q-btn color="secondary" style="width:100%;margin-top:8px" to="/absen">
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/absen.png" height="100" width="100" style="margin:8px">
                </div>
                <div class="col">
                  ABSEN
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col">
            <q-btn color="secondary" style="width:100%;margin-top:20px" to="/izincuti">
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/cuti.png" height="100" width="100" style="margin:8px">
                </div>
                <div class="col">
                  IZIN CUTI
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col">
            <q-btn color="secondary" style="width:100%;margin-top:20px" to="/approval">
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/approval.png" height="100" width="100" style="margin:8px">
                </div>
                <div class="col">
                  APPROVAL
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col">
            <q-btn color="secondary" style="width:100%;margin-top:20px;margin-botton:8px;" to="/approvecuti">
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/approvalcuti.png" height="100" width="100" style="margin:8px">
                </div>
                <div class="col">
                  APPROVAL CUTI
                </div>
              </div>
            </q-btn>
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