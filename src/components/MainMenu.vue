<template>
  <div class="flex flex-center">
    <div>
      <p>Selamat Datang, {{ JSON.parse(this.$ls.get("dataUserNow")).nama }}</p>
    </div>
    <div class="q-pa-md q-gutter-sm" style="text-align:center;width:100%">
      <div class="column">
        <div v-if="dataUser.length===0 || dataUser.length!==0">
          <div class="col">
            <q-btn color="secondary" style="width:100%;" to="/absen">
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/absen.png" height="100" width="100" style="margin:8px" />
                </div>
                <div class="col">ABSEN</div>
              </div>
            </q-btn>
          </div>
          <div class="col">
            <q-btn color="secondary" style="width:100%;margin-top:20px" to="/izincuti">
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/cuti.png" height="100" width="100" style="margin:8px" />
                </div>
                <div class="col">IZIN CUTI {{userskrg}}</div>
              </div>
            </q-btn>
          </div>
        </div>
        <div v-if="dataUser.length!==0">
          <div class="col">
            <q-btn color="secondary" style="width:100%;margin-top:20px" to="/approval">
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/approval.png" height="100" width="100" style="margin:8px" />
                </div>
                <div class="col">APPROVAL</div>
              </div>
            </q-btn>
          </div>
          <div class="col">
            <q-btn
              color="secondary"
              style="width:100%;margin-top:20px;margin-botton:8px;"
              to="/approvecuti"
            >
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/approvalcuti.png" height="100" width="100" style="margin:8px" />
                </div>
                <div class="col">APPROVAL CUTI</div>
              </div>
            </q-btn>
          </div>
        </div>
        <div class="col">
            <q-btn
              color="secondary"
              style="width:100%;margin-top:20px;margin-botton:8px;"
              to="/resetpassword"
            >
              <div class="column" style="text-align:center;">
                <div class="col">
                  <img src="../assets/resetpassword.png" height="100" width="100" style="margin:8px" />
                </div>
                <div class="col">RESET PASSWORD</div>
              </div>
            </q-btn>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import datauser_api from "../api/datauser/index";
export default {
  data() {
    return {
      dataUser: []
    };
  },

  computed: {
    userskrg() {
      return console.log('nama: ', this.$ls.get("userNow"));
    }
  },

  beforeCreate() {
    let self = this;

    datauser_api
      .getDataBySpv(window, self.$ls.get("userNow"))
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataUser = res;
        console.log("datanya = ", self.dataUser);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>