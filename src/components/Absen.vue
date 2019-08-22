<template>
  <div class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <div style="text-align:center;">
        <h3>Absen</h3>
      </div>
      <div class="column" style="height: 150px;text-align:center;">
        <div class="col">
          <!-- <q-btn v-if="clicked" color="primary" label="ABSEN DATANG" @click="absenDatang()" disable/>
          <q-btn v-if="!clicked" color="primary" label="ABSEN DATANG" @click="absenDatang()" /> -->
          
          <q-btn v-if="!datang" color="primary" label="ABSEN DATANG" @click="absenDatang()" disable/>
          <q-btn v-if="datang" color="primary" label="ABSEN DATANG" @click="absenDatang()" />
          
        </div>
        <div class="col">
          <q-btn v-if="!pulang" color="primary" label="ABSEN PULANG" @click="absenPulang()" disable/>
          <q-btn v-if="pulang" color="primary" label="ABSEN PULANG" @click="absenPulang()"/>

          <!-- <q-btn color="primary" label="ABSEN PULANG" @click="absenPulang()"/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import absensi_api from '../api/absensi/index'
import moment from 'moment'

export default {
  data(){
    return {
      clicked: false,
      dataAbsensiToday:[],
      datang: true,
      pulang: true,
    }
  },
  
  methods:{
    absenDatang(){
      let self = this;
      this.$getLocation()
      .then(coordinates => {
        let self = this
        let param = {
          idEmployee: this.$ls.get("userNow"),
          keterangan: "Datang",
          status: "Waiting",
          idAsesor: "",
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
          idAsesor: "",
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

  }
}
</script>