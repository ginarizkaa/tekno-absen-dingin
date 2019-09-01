<template>
  <div class="q-pa-md">
    <center>
      <h6>Status Cuti</h6>
    </center>
    <div v-if="dataCuti.length === 0">
      <center>
        <h6>Status Cuti</h6>
        <p>Anda Belum Mengambil Cuti</p>
      </center>
    </div>
    <div v-else>
      <q-markup-table :separator="separator" flat bordered>
        <thead>
          <tr>
            <th class="text-center">No</th>
            <th class="text-center">Jenis Cuti</th>
            <th class="text-center">Awal Cuti</th>
            <th class="text-center">Akhir Cuti</th>
            <th class="text-center">Ket</th>
            <th class="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dc, index) in dataCuti" :key="index">
            <td class="text-center">{{ index + 1 }}</td>
            <td class="text-center">{{ dc.DataJenisCuti.JenisCuti }}</td>
            <td class="text-center">{{ dc.dateAwal | formatDate }}</td>
            <td class="text-center">{{ dc.dateAkhir | formatDate }}</td>
            <td class="text-center">{{ dc.keterangan }}</td>
            <td class="text-center">
              <div v-if="dc.status === 'Waiting'">{{ dc.status }}</div>
              <div v-else>{{ dc.status }} by {{ dc.DataAsesor.nama }}</div>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>

  <!-- <div style="text-align:center;">
    <h6>Status Cuti {{userskrg}}</h6>
    <div class="flex flex-center">
      <div class="container mt-4">
        <div v-if="dataCuti.length === 0">
          <p>Anda belum mengambil cuti</p>
        </div>
        <div v-else>
          <table class="table table-bordered mt-4">
            <thead class="thead-light">
              <tr>
                <th width="5%">No</th>
                <th width="20%">Awal Cuti</th>
                <th width="20%">Akhir Cuti</th>
                <th width="25%">Ket</th>
                <th width="10%">Status</th>
              </tr>
            </thead>
            <tbody style="text-align:center;">
              <tr v-for="(dc, index) in dataCuti" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ dc.dateAwal | formatDate }}</td>
                <td>{{ dc.dateAkhir | formatDate }}</td>
                <td>{{ dc.keterangan }}</td>
                <td>{{ dc.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>-->
</template>

<script>
import datacuti_api from "../api/datacuti/index";

export default {
  data() {
    return {
      dataCuti: [],
      separator: "vertical"
    };
  },

  computed: {
    userskrg() {
      this.$ls.get("userNow");
    }
  },

  beforeCreate() {
    let self = this;

    datacuti_api
      .getDataCutiByEmployee(window, self.$ls.get("userNow"))
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataCuti = res;
        console.log("data cuti = ", self.dataCuti);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style>
</style>