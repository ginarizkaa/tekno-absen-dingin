<template>
  <div class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <div style="text-align:center;">
        <h3>Absen</h3>
      </div>
      <div class="column" style="height: 150px;text-align:center;">
        <div class="col">
          <q-btn color="primary" label="ABSEN DATANG" @click="absen()"/>
          
        </div>
        <div class="col">
          <q-btn color="primary" label="ABSEN PULANG" />
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

    }
  },
  
  methods:{
    absen(){
      
      this.$getLocation()
      .then(coordinates => {
          let param = {
            idUser: this.$ls.get("userNow"),
            keterangan: "datang",
            status: "waiting",
            idAsesor: "",
            loc: [coordinates.lat,coordinates.lng]
          }

          // console.log("oke = ",param)

          absensi_api
            .postAbsen(window, param)
            .then(function(result) {
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