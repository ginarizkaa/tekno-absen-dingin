<template>
  <div class="flex flex-center">
    <h6 style="text-align:center;">Status Absen Pagi</h6>
    <div v-if="dataAbsensiToday.length === 0">
      <p style="text-align:center;">Anda belum Absen</p>
    </div>
    <table class="table" width="60%" height="100px">
      <div v-if="dataAbsensiToday.length === 0">
        <p style="text-align:center;">Anda belum Absen</p>
      </div>
      <div v-for="data in dataAbsensiToday" :key="data.id">
        <div v-if="data.keterangan==='Datang'">
          <tr height="50px">
            <td width="60%">Nama</td>
            <td width="5%">:</td>
            <td>{{data.DataEmployee.nama }}</td>
          </tr>
          <tr height="50px">
            <td width="60%">Tanggal</td>
            <td width="5%">:</td>
            <td>{{data.date | formatDate }}</td>
          </tr>
          <tr height="50px">
            <td>Jam Datang</td>
            <td>:</td>
            <td>{{data.date | formatJam }} WIB</td>
          </tr>
          <tr height="50px">
            <td>Status</td>
            <td>:</td>
            <td>
              <div v-if="data.status === 'Waiting'">{{ data.status }}</div>
              <div v-else>{{ data.status }} by {{data.DataAsesor.nama }}</div>
            </td>
          </tr>
          <tr height="50px">
            <td>Lokasi</td>
            <td>:</td>
            <td>
              <router-link
                :to="{ name: 'map2', params: { lat: data.location.lat, long : data.location.lng } }"
              >Lihat</router-link>
            </td>
          </tr>
        </div>
      </div>
    </table>
  </div>
</template>
<style>
</style>
<script>
import absensi_api from "../api/absensi/index";

export default {
  data() {
    return {
      dataAbsensiToday: []
    };
  },

  beforeCreate() {
    let self = this;
    let idEmployeeX = self.$ls.get("userNow");

    absensi_api
      .getTodayEmployee(window, idEmployeeX)
      .then(function(res) {
        self.dataAbsensiToday = res;
        return res;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>