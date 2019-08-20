<template>
  <div class="flex flex-center">
    <div class="q-pa-md q-gutter-sm">
      <div style="text-align:center;">
        <h3>Absen</h3>
      </div>
      <div class="column" style="height: 150px;text-align:center;">
        <div class="col">
          <q-btn v-if="clicked" color="primary" label="ABSEN DATANG" @click="absenDatang()" disable/>
          <q-btn v-if="!clicked" color="primary" label="ABSEN DATANG" @click="absenDatang()" />
          
          
        </div>
        <div class="col">
          <q-btn color="primary" label="ABSEN PULANG" @click="absenPulang()"/>
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
      dataAbsensi:[]

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
         let date1 = moment().format('DD-MM-YYYY')
         console.log(date1)
         console.log("data absensinya ",typeof this.dataAbsensi)
        let self = this;
        if(self.dataAbsensi.length == 0) {
          absensi_api
              .postAbsen(window, param)
              .then(function(result) {
                console.log("berhasil")
                self.clicked=true
                return result;
              })
              .catch(function(err) {
                console.log(err);
              });
        } else{

          console.log("aaaappppppp")
          for(let i=0; i<this.dataAbsensi.length;i++){
          let date2 = moment(this.dataAbsensi[i].date).format('DD-MM-YYYY')
            console.log(date2)
          if(this.dataAbsensi[i].idEmployee===this.$ls.get("userNow") && date1===date2){
            // notif
            self.clicked=true
            console.log("data sudah ada")
          }else{
            console.log("data belum ada")
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
          }
        }
        }
        
        

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

        console.log("oke = ",param)
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
    
  },

  // get per tanggal
  beforeCreate(){
    let self = this;

    absensi_api
      .getDetailAbsen(window)
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataAbsensi = res;
        console.log("datanya = ", self.dataAbsensi)
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
</script>