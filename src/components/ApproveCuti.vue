<template>
  <div class="q-pa-md">
    <center>
      <strong style="font-size:30px;">Database Cuti</strong>
    </center>
    <br />
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">No</th>
          <th class="text-center">Nama</th>
          <th class="text-center">Jenis Cuti</th>
          <th class="text-center">Awal Cuti</th>
          <th class="text-center">Akhir Cuti</th>
          <th class="text-center">Ket</th>
          <th class="text-center">Status</th>
          <th class="text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dc, index) in dataCuti" :key="index">
          <td class="text-center">{{ index + 1 }}</td>
          <td class="text-left">{{ dc.DataEmployee.nama }}</td>
          <td class="text-center">{{ dc.DataJenisCuti.JenisCuti }}</td>
          <td class="text-center">{{ dc.dateAwal | formatDate }}</td>
          <td class="text-center">{{ dc.dateAkhir | formatDate }}</td>
          <td class="text-center">{{ dc.keterangan }} </td>
          <td class="text-center">
            <div v-if="dc.status === 'Waiting'">{{ dc.status }}</div>
            <div v-else>{{ dc.status }} by {{ dc.DataAsesor.nama }}</div>
          </td>
          <td class="text-center">
            <div v-if="dc.status === 'Waiting' || dc.status === 'Rejected'">
              <q-btn color="blue" align="center" icon="check" @click="konfirmasiCuti(dc, sAcc)" />
              <q-btn color="warning" icon="cancel" @click="konfirmasiCuti(dc, sRej)" />
              <q-btn color="red" icon="delete" @click="deleteCuti(dc.id)" />
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
import datacuti_api from "../api/datacuti/index";

export default {
  data() {
    return {
      dataCuti: [],
      sAcc: "Accepted",
      sRej: "Rejected",
    };
  },

  methods: {
    konfirmasiCuti(data, stat) {
      let self = this;
      let statuss;
      if(stat==="Accepted"){
        statuss = "Accepted"
      }else if(stat==="Rejected"){
        statuss = "Rejected"
      }
      let idCuti = data.id;
      let param = {
        dateAwal: data.dateAwal,
        dateAkhir: data.dateAkhir,
        keterangan: data.keterangan,
        status: statuss,
        idJenisCuti: data.idJenisCuti,
        idAsesor: self.$ls.get("userNow"),
        idEmployee: data.DataEmployee.id
      };
      datacuti_api
        .putStatus(window, idCuti, param)
        .then(function(result) {
          window.location.reload(true);
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });

      datacuti_api
        .getDetailCuti(window)
        .then(function(datas) {
          return datas;
        })
        .then(function(res) {
          self.dataCuti = res;
          //console.log("datanya = ", self.dataCuti)
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    deleteCuti(id) {
      datacuti_api
        .deleteDataCuti(window, id)
        .then(function(result) {
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    
  },

  beforeCreate() {
    let self = this;

    datacuti_api
      .getDataCutiBySpv(window, self.$ls.get("userNow"))
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataCuti = res;
        //console.log("datanya = ", self.dataCuti)
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style>
</style>