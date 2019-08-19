<template>
  <div class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <div style="text-align:center;">
        <h3>Absen</h3>
      </div>
      <div class="column" style="height: 150px;text-align:center;">
        <div class="col">
          <q-btn v-if="clicked=false" color="primary" label="ABSEN DATANG" @click="absenDatang()" disable/>
          <q-btn v-if="clicked=true" color="primary" label="ABSEN DATANG" @click="absenDatang()" />
          
          
        </div>
        <div class="col">
          <q-btn color="primary" label="ABSEN PULANG" @click="absenPulang()"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import absensi_api from '../api/absensi/index';
export default {
  data(){
    return {
      clicked: false

    }
  },
  
  methods:{
    absenDatang(){
      this.$getLocation()
      .then(coordinates => {
        let param = {
          idEmployee: this.$ls.get("userNow"),
          keterangan: "datang",
          status: "waiting",
          idAsesor: "",
          location: {
            lat: coordinates.lat,
            lng: coordinates.lng
          }
        }

        //console.log("oke = ",param)
        
        absensi_api
          .postAbsen(window, param)
          .then(function(result) {
            console.log("berhasil")
            this.clicked=false
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
        let param = {
          idEmployee: this.$ls.get("userNow"),
          keterangan: "pulang",
          status: "waiting",
          idAsesor: "",
          location: {
            lat: coordinates.lat,
            lng: coordinates.lng
          }
        }
        //console.log("oke = ",param)
        absensi_api
          .postAbsen(window, param)
          .then(function(result) {
            //console.log("berhasil")
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });
      });
    
    },
    
  }
}
</script>