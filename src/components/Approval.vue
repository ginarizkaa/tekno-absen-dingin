<template>
  <div class="q-pa-md">
    <center>
      <strong style="font-size:30px;">Approval Absen</strong>
    </center>
    <br />
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">No</th>
          <th class="text-center">Nama</th>
          <th class="text-center">Keterangan</th>
          <th class="text-center">Status</th>
          <th class="text-center">Waktu</th>
          <th class="text-center">Lokasi</th>
          <th class="text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(da, index) in dataAbsensi" :key="index">
          <td class="text-center">{{ index + 1 }}</td>
          <td class="text-left">{{ da.DataEmployee.nama }}</td>
          <td class="text-center">{{ da.keterangan }}</td>
          <td class="text-center">
            <div v-if="da.status === 'Waiting'">{{ da.status }}</div>
            <div v-else>{{ da.status }} by {{ da.DataAsesor.nama }}</div>
          </td>
          <td class="text-center">{{ da.date | formatJam }}</td>
          <td class="text-center">
            <router-link
              :to="{ name: 'map2', params: { lat: da.location.lat, long : da.location.lng } }"
            >Lihat</router-link>
          </td>
          <td class="text-center">
            <div v-if="da.status === 'Waiting'">
              <q-btn color="blue" align="center" icon="check" @click="accept(da)" />
              <q-btn color="warning" icon="cancel" @click="reject(da)" />
            </div>
            <div v-else-if="da.status === 'Rejected'">
              <q-btn color="blue" align="center" icon="check" @click="accept(da)" />
              <q-btn color="warning" icon="cancel" @click="reject(da)" />
            </div>
            <div v-else>
              <p>no action needed</p>
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import absensi_api from "../api/absensi/index";

export default {
  data() {
    return {
      separator: "vertical",
      dataAbsensi: []
    };
  },

  methods: {
    accept(data) {
      let self = this;
      let idAbsen = data.id;

      let param = {
        date: data.date,
        keterangan: data.keterangan,
        status: "Approved",
        idAsesor: self.$ls.get("userNow"),
        location: data.location,
        idEmployee: data.DataEmployee.id
      };

      absensi_api
        .putStatus(window, idAbsen, param)
        .then(function(result) {
          //console.log("berhasil")
          window.location.reload(true);
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
          //console.log("datanya = ", self.dataAbsensi)
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    reject(data) {
      let self = this;
      let idAbsen = data.id;

      let param = {
        date: data.date,
        keterangan: data.keterangan,
        status: "Rejected",
        idAsesor: self.$ls.get("userNow"),
        location: data.location,
        idEmployee: data.DataEmployee.id
      };
      //console.log("id absen = ", idAbsen, "paramnya = ", param);

      absensi_api
        .putStatus(window, idAbsen, param)
        .then(function(result) {
          //console.log("berhasil")
          window.location.reload(true);
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
          //console.log("datanya = ", self.dataAbsensi)
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },

  beforeCreate() {
    let self = this;

    absensi_api
      .getTodayBySpv(window, self.$ls.get("userNow"))
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataAbsensi = res;
        //console.log("datanya = ", self.dataAbsensi)
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
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
.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}
</style>