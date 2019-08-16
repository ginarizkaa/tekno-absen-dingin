<template>
  <div class="flex flex-center">
    <div class="q-pa-md" style="max-width: 400px;width:100%;text-align:center;">
      <h3>Izin Cuti</h3>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

        <!-- <q-select v-model="jenisCutinya">
          <option v-for="tc in tabelCutiList" :key="tc.id">{{ tc.jenisCuti }}</option>
        </q-select> -->

        <!-- <q-select filled v-for="tc in tabelCutiList" :key="tc.id" v-bind:value="tc.id" :options="tc.jenisCuti" v-model="jenisCuti"  label="Jenis Cuti" /> -->
        <q-select filled type="list" :options="tabelCutiList" v-model="jenisCuti"  label="Jenis Cuti" />

        <q-input v-model="dateAwal" filled type="date" hint="Awal Cuti" />

        <q-input v-model="dateAkhir" filled type="date" hint="Akhir Cuti" />

        <q-input v-model="text" filled type="textarea" hint="Keterangan" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>

      </q-form>
    </div>
  </div>
</template>

<style>
</style>

<script>
import tabelcuti_api from '../api/tabelcuti/index'
import datacuti_api from '../api/datacuti/index'

export default {
  name: "Login",
  data() {
    return {

      tabelCutiList: [],
      jenisCuti:"",
      dateAwal: "",
      dateAkhir: "",
      text: ""
    };
  },

  methods: {
    onSubmit() {
      let self = this;
      
      let param = {
        idEmployee: self.$ls.get("userNow"),
        idCuti:self.jenisCuti.value,
        dateAwal:self.dateAwal,
        dateAkhir:self.dateAkhir,
        keterangan:self.text,
        status:"waiting",
        idAsesor:""
      }

      //console.log("datanya = ", param)

      datacuti_api
        .postDataCuti(window, param)
        .then(function(result) {
          console.log("berhasil")
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });

      // if (this.accept !== true) {
      //   this.$q.notify({
      //     color: "red-5",
      //     textColor: "white",
      //     icon: "fas fa-exclamation-triangle",
      //     message: "You need to accept the license and terms first"
      //   });
      // } else {
      //   this.$q.notify({
      //     color: "green-4",
      //     textColor: "white",
      //     icon: "fas fa-check-circle",
      //     message: "Submitted"
      //   });
      // }
    },

    onReset() {
      this.jenisCuti = null;
      this.dateAwal = null;
      this.dateAkhir = null;
      this.text = null;
    }
  },

  beforeCreate(){
    let self = this;

    tabelcuti_api
      .getAllTabelCuti(window)
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        //console.log("resnya = ", res)
        for(let i = 0; i < res.length; i++){
          var temp = {
            label: res[i].JenisCuti,
            value: res[i].id
          }
          self.tabelCutiList.push(temp)
        }
        //console.log("ini datanya ", self.tabelCutiList);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>
