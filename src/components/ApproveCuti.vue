<template>
<div style="text-align:center;">
  <h3>Approval Cuti</h3>
  <div class="flex flex-center">
    <div class="container mt-4" >
      <table class="table table-bordered mt-4">
        <thead class="thead-light">
          <tr>
            <th width="5%">No</th>
            <th width="20%">Nama</th>
            <th width="10%">Jenis Cuti</th>
            <th width="10%">Awal Cuti</th>
            <th width="10%">Akhir Cuti</th>
            <th width="25%">Ket</th>
            <th width="10%">Status</th>
            <th width="10%">Action</th>
          </tr>
        </thead>
        <tbody style="text-align:center;">
          <tr v-for="(dc, index) in dataCuti" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
            {{ dc.DataEmployee.nama}}
            </td>
            <td>
              {{ dc.DataJenisCuti.JenisCuti }}
            </td>
            <td>
              {{ dc.dateAwal | formatDate }}
            </td>
            <td>
              {{ dc.dateAkhir | formatDate }}
            </td>
            <td>
              {{ dc.keterangan }}
            </td>
            <td>
              {{ dc.status }}
            </td>
            <td>
              <q-btn color="secondary" icon="check" @click="accept(dc)" />
              <q-btn color="red" icon="cancel" @click="updateProduct(item)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import datacuti_api from '../api/datacuti/index'

export default {
  data () {
    return {
      dataCuti: [],

    }
  },

  methods:{
    accept(data){
      let self = this;
      let idCuti = data.id;
      
      let param = {
        dateAwal: data.dateAwal,
        dateAkhir: data.dateAkhir,
        keterangan: data.keterangan,
        status: "accepted",
        idJenisCuti: data.idJenisCuti,
        idAsesor: self.$ls.get("userNow"),
        idEmployee: data.DataEmployee.id
      }
      console.log("id absen = ", idCuti, "paramnya = ", param);

      datacuti_api
        .putStatus(window, idCuti, param)
        .then(function(result) {
            console.log("berhasil")
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
          console.log("datanya = ", self.dataCuti)
        })
        .catch(function(err) {
          console.log(err);
        });
    },

  },

  beforeCreate(){
    let self = this;

    datacuti_api
      .getDetailCuti(window)
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataCuti = res;
        console.log("datanya = ", self.dataCuti)
      })
      .catch(function(err) {
        console.log(err);
      });
  }

}
</script>

<style>

</style>