<template>
  <div class="container mt-4" >
    <div style="text-align:center;">
        <h3>Approval Absen</h3>
    </div>
    
    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="5%">No</th>
          <th width="10%">Nama</th>
          <th width="10%">Keterangan</th>
          <th width="10%">Status</th>
          <th width="10%">Waktu</th>
          <th width="10%">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(da, index) in dataAbsensi" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
           {{ da.DataUser.nama   }}
          </td>
          <td>
            {{ da.keterangan }}
          </td>
          <td>
            {{ da.status }}
          </td>
          <td>
            {{ da.date }}
          </td>
          <td>
            <q-btn color="secondary" align="center" icon="check" @click="accept(da)" />
            <q-btn color="red" icon="cancel" @click="updateProduct(da)" />
          </td>
        </tr>
      </tbody>
    </table>

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
        status: "accepted",
        idAsesor: self.$ls.get("userNow"),
        location: data.location,
        idEmployee: data.DataUser.id
      }
      console.log("id absen = ", idAbsen, "paramnya = ", param);

      absensi_api
        .putStatus(window, idAbsen, param)
        .then(function(result) {
            console.log("berhasil")
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