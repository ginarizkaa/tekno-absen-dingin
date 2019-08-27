<template>
  <div class="flex flex-center">
    <div class="q-pa-md q-gutter-sm" style="width:100%">
      <div class="column" style="text-align:center;">
        <div class="col">
          <q-btn v-if="!datang" color="secondary" style="width:100%;margin-top:8px" @click="absenDatang()" disable>
            <div class="column" style="text-align:center;">
              <div class="col">
                <img src="../assets/datang.png" height="100" width="100" style="margin:8px">
              </div>
              <div class="col">
                ABSEN DATANG
              </div>
            </div>
          </q-btn>

          <q-btn v-if="datang" color="secondary" style="width:100%;margin-top:8px" @click="absenDatang()">
            <div class="column" style="text-align:center;">
              <div class="col">
                <img src="../assets/datang.png" height="100" width="100" style="margin:8px">
              </div>
              <div class="col">
                ABSEN DATANG
              </div>
            </div>
          </q-btn>
        </div>
        <div class="col">
          <q-btn v-if="!pulang" color="secondary" style="width:100%;margin-top:20px" @click="absenPulang()" disable>
            <div class="column" style="text-align:center;">
              <div class="col">
                <img src="../assets/pulang.png" height="100" width="120" style="margin:8px">
              </div>
              <div class="col">
                ABSEN PULANG
              </div>
            </div>
          </q-btn>

          <q-btn v-if="pulang" color="secondary" style="width:100%;margin-top:20px" @click="absenPulang()">
            <div class="column" style="text-align:center;">
              <div class="col">
                <img src="../assets/pulang.png" height="100" width="120" style="margin:8px">
              </div>
              <div class="col">
                ABSEN PULANG
              </div>
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import absensi_api from '../api/absensi/index'
import datauser_api from '../api/datauser/index'
import moment from 'moment'

export default {
  data(){
    return {
      clicked: false,
      dataAbsensiToday:[],
      datang: true,
      pulang: true,
      dataUser:[]
    }
  },
  
  methods:{
    absenDatang(){
      let self = this;
      this.$getLocation()
      .then(coordinates => {
        let self = this
        let param = {
          idEmployee: self.$ls.get("userNow"),
          keterangan: "Datang",
          status: "Waiting",
          idAsesor: self.dataUser.idSpv,
          location: {
            lat: coordinates.lat,
            lng: coordinates.lng
          }
        }

         absensi_api
          .postAbsen(window, param)
          .then(function(result) {
            console.log("berhasil")
            //this.datang=false;
            self.$q.notify({
              color: "blue",
              textColor: "white",
              icon: "fas fa-exclamation-triangle",
              message: "Absen Pagi Berhasil!"
            });
            self.$router.push("statuspagi");
            return result;
          })
          .catch(function(err) {
            console.log(err);
          }); 
      });
    },
    
    absenPulang(){
      this.$getLocation()
      .then(coordinates => {
        let self = this
        let param = {
          idEmployee: this.$ls.get("userNow"),
          keterangan: "Pulang",
          status: "Waiting",
          idAsesor: self.dataUser.idSpv,
          location: {
            lat: coordinates.lat,
            lng: coordinates.lng
          }
        }

        console.log("oke = ",param)
        absensi_api
          .postAbsen(window, param)
          .then(function(result) {
            //console.log("berhasil")
            self.$q.notify({
              color: "blue",
              textColor: "white",
              icon: "fas fa-exclamation-triangle",
              message: "Absen Sore Berhasil!"
            });
            self.$router.push("statuspulang");
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });
      
      });
    
    },
    
  },

  // get per tanggal
  beforeCreate(){
    let self = this;

    absensi_api
      .getToday(window)
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataAbsensiToday = res;
        console.log("datanya = ", self.dataAbsensiToday)
        for(let j=0; j<self.dataAbsensiToday.length; j++){
          if(self.dataAbsensiToday[j].idEmployee === self.$ls.get("userNow")){
            if(self.dataAbsensiToday[j].keterangan === "Datang"){
              self.datang=false;
            }else if(self.dataAbsensiToday[j].keterangan === "Pulang"){
              self.pulang=false;
            }
          }
          else{
            //do Nothing
          }
        }
      })
      .catch(function(err) {
        console.log(err);
      });

    datauser_api
      .getEmployeeById(window, self.$ls.get("userNow"))
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataUser = res;
        console.log("data user = ", self.dataUser)
      })
      .catch(function(err) {
        console.log(err);
      });
      
  }
}
</script>