<template>
  <div style="text-align:center;">
    <h3>Approval Absen</h3>
  <div class="flex flex-center">
    <div class="container mt-4" >
    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="5%">No</th>
          <th width="25%">Nama</th>
          <th width="10%">Keterangan</th>
          <th width="25%">Status</th>
          <th width="10%">Waktu</th>
          <th width="10%">Lokasi</th>
          <th width="10%">Action</th>
        </tr>
      </thead>
      <tbody style="text-align:center;">
        
        <tr v-for="(da, index) in dataAbsensi" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
           {{ da.DataEmployee.nama }}
          </td>
          <td>
            {{ da.keterangan }}
          </td>
          <td>
            <div v-if="da.status === 'Waiting'">
              {{ da.status }}
            </div>
            <div v-else>
              {{ da.status }} by {{ da.DataAsesor.nama }}
            </div>
          </td>
          <td>
            {{ da.date | formatJam }}
          </td>
          <td>
            <router-link :to="{ name: 'map2', params: { lat: da.location.lat, long : da.location.lng } }">Lihat</router-link>
          </td>
          <td>
            <div v-if="da.status === 'Waiting'">
              <q-btn color="secondary" align="center" icon="check" @click="accept(da)" />
              <q-btn color="red" icon="cancel" @click="reject(da)" />
            </div>
            <div v-else-if="da.status === 'Rejected'">
              <q-btn color="secondary" align="center" icon="check" @click="accept(da)" />
              <q-btn color="red" icon="cancel" @click="reject(da)" />
            </div>
            <div v-else>
              <p>no action needed</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>

  </div>
  </div>
</template>

<script>
import absensi_api from '../api/absensi/index'

export default {
  data () {
    return {
      dataAbsensi:[]
    }
    
  },
  

  methods:{
    accept(data){
      let self = this;
      let idAbsen = data.id;
      
      let param = {
        date: data.date,
        keterangan: data.keterangan,
        status: "Approved",
        idAsesor: self.$ls.get("userNow"),
        location: data.location,
        idEmployee: data.DataEmployee.id
      }
      console.log("id absen = ", idAbsen, "paramnya = ", param);

      absensi_api
        .putStatus(window, idAbsen, param)
        .then(function(result) {
            console.log("berhasil")
            window.location.reload(true)
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });

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
    },

    reject(data){
      let self = this;
      let idAbsen = data.id;
      
      let param = {
        date: data.date,
        keterangan: data.keterangan,
        status: "Rejected",
        idAsesor: self.$ls.get("userNow"),
        location: data.location,
        idEmployee: data.DataEmployee.id
      }
      console.log("id absen = ", idAbsen, "paramnya = ", param);

      absensi_api
        .putStatus(window, idAbsen, param)
        .then(function(result) {
            console.log("berhasil")
            window.location.reload(true)
            return result;
          })
          .catch(function(err) {
            console.log(err);
          });

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
    },

  },
  

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

<style>

.table .thead-light th {
    color: #495057;
    background-color: #e9ecef;
    border-color: #dee2e6;
}
.table {
    border-collapse: collapse;
}
.table-bordered th, .table-bordered td {
    border: 1px solid #dee2e6;
}
</style>