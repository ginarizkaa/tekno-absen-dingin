<template>
  <div class="q-pa-md">
    <center>
      <strong style="font-size:30px;">Database Absen</strong>
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
            <div v-if="da.status === 'Waiting' || da.status === 'Rejected'">
              <q-btn color="blue" align="center" icon="check" @click="konfirmasiAbsen(da, sAcc)" />
              <q-btn color="warning" icon="cancel" @click="konfirmasiAbsen(da, sRej)" />
              <q-btn color="red" icon="delete" @click="deleteAbsen(da.id)" />
            </div>
            <div v-else>
              <p>no action needed</p>
            </div>
          </td>
        </tr>
      </tbody>
    </q-markup-table>

    <!-- ----------------------------------------CUTI---------------------------------------------- -->
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

    <!-- --------------------------------------USER---------------------------------------------- -->

    <center>
      <strong style="font-size:30px;">Database User</strong>
    </center>
    <br />
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">No</th>
          <th class="text-center">Nama</th>
          <th class="text-center">Username</th>
          <th class="text-center">Password</th>
          <th class="text-center">idSpv</th>
          <th class="text-center">Roles</th>
          <th class="text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
            <td class="text-center">{{ index + 1 }}</td>
            <td class="text-center">
            <span v-if="editIndex !== index">{{ item.nama }}</span>
            <span v-if="editIndex === index">
                <input class="form-control form-control-sm" v-model="item.nama" />
            </span>
            </td>
            <td class="text-center">
              <span v-if="editIndex !== index">{{ item.username }}</span>
              <span v-if="editIndex === index">
                  <input class="form-control form-control-sm" v-model="item.username" />
              </span>
            </td>
            <td class="text-center">
              <span v-if="editIndex !== index">{{ item.password }}</span>
              <span v-if="editIndex === index">
                  <input class="form-control form-control-sm" v-model="item.password" />
              </span>
            </td>
            <td class="text-center">
            <span
                v-if="editIndex !== index && typeof(item.DataSpv) != 'undefined'"
            >{{ item.DataSpv.nama }}</span>
            <span v-if="editIndex === index">
                <select v-model="item.idSpv">
                <option
                    v-for="option in items"
                    v-bind:value="option.id"
                    :key="option.id"
                >{{ option.nama }}</option>
                </select>
            </span>
            </td>
            <td class="text-center">
              <span v-if="editIndex !== index">{{ item.roles }}</span>
              <span v-if="editIndex === index">
                  <select v-model="item.roles">
                    <option
                      v-for="option in daftarRoles"
                      v-bind:value="option"
                      :key="option"
                  >{{ option }}
                    </option>
                  </select>
              </span>
            </td>
            <td class="text-center">
            <span v-if="editIndex !== index && tambahkan === false">
                <q-btn color="green" icon="edit" @click="edit(item, index)"/>
                <q-btn color="red" icon="delete"  @click="deleteProduct(item.id)"/>
            </span>
            <span v-else-if="editIndex === index && tambahkan === true">
                <q-btn color="warning" icon="cancel" @click="cancel(item)" />
                <q-btn color="blue" icon="add" @click="addProduct(item)" />
            </span>
            <span v-else-if="editIndex === index && tambahkan === false">
                <q-btn color="warning" icon="cancel" @click="cancel(item)" />
                <q-btn color="blue" icon="save" @click="updateProduct(item)" />
            </span>
            </td>
        </tr>
      </tbody>
    </q-markup-table>
    <div class="col-3 offset-9 text-right my-3">
        <q-btn color="blue" icon="add"  @click="add"/>        
    </div>

  </div>
</template>

<style>
</style>

<script>
import absensi_api from "../api/absensi/index";
import datauser_api from "../api/datauser/index";
import datacuti_api from "../api/datacuti/index";
var mongoose = require('mongoose');


export default {
  data() {
    return {
      sAcc: "Accepted",
      sRej: "Rejected",
      daftarRoles: ["Karyawan","Admin"],
      dataAbsensi: [],
      dataUser: [],
      dataCuti: [],
      items: [],
      separator: "vertical",
      editIndex: null,
      tambahkan: false,
      originalData: null,
    };
  },
  methods: {
    konfirmasiAbsen(data, stat) {
      let statuss;
      if(stat==="Accepted"){
        statuss = "Accepted"
      }else if(stat==="Rejected"){
        statuss = "Rejected"
      }
      let self = this;
      let idAbsen = data.id;
      let param = {
        date: data.date,
        keterangan: data.keterangan,
        status: statuss,
        idAsesor: self.$ls.get("userNow"),
        location: data.location,
        idEmployee: data.DataEmployee.id
      };
      absensi_api
        .putStatus(window, idAbsen, param)
        .then(function(result) {
          window.location.reload(true);
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
    },

    deleteAbsen(id) {
      absensi_api
        .deleteDataAbsen(window, id)
        .then(function(result) {
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
    },

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

    add() {
      this.originalData = null;
      this.items.push({ nama: "", username: "", password: "", idSpv: "" });
      this.editIndex = this.items.length - 1;
      this.tambahkan = true;
    },

    deleteProduct(id) {
      //console.log(id);
      datauser_api
        .deleteDataUser(window, id)
        .then(function(result) {
          //console.log("berhasil");
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
      window.location.reload();
    },

    addProduct(item) {
      //console.log("model", item);

      datauser_api
        .postDataUser(window, item)
        .then(function(result) {
          //console.log("berhasil");
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });

      window.location.reload();
    },

    updateProduct(item) {
        let param = {
            id: item.id,
            nama: item.nama,
            username: item.username,
            password: item.password,
            roles: item.roles,
            idSpv: mongoose.Types.ObjectId(item.idSpv)
        }
      //console.log("update = ", param);
      datauser_api
        .putDataUser(window, param)
        .then(function(result) {
          //console.log("berhasil");
          return result;
        })
        .catch(function(err) {
          console.log(err);
        });
      window.location.reload();
    },

    edit(item, index) {
      this.originalData = Object.assign({}, item);
      this.editIndex = index;
    },

    cancel(item) {
      this.editIndex = null;
      this.tambahkan = false;

      if (!this.originalData) {
        this.items.splice(this.items.indexOf(item), 1);
        return;
      }

      Object.assign(item, this.originalData);
      this.originalData = null;
    },

    remove(item, index) {
      this.items.splice(index, 1);
    },

    save(item) {
      this.originalData = null;
      this.editIndex = null;
    },
    
  },

  beforeCreate() {
    let self = this;

    absensi_api
      .getDetailAbsen(window)
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.dataAbsensi = res;
        //console.log("data absensi = ", self.dataAbsensi);
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
        //console.log("data cuti = ", self.dataCuti);
      })
      .catch(function(err) {
        console.log(err);
      });

    datauser_api
      .getDetailUser(window)
      .then(function(datas) {
        return datas;
      })
      .then(function(res) {
        self.items = res;
        // for(let i=0; i<res.length;i++){
        //   if(typeof(res[i].DataSpv) != 'undefined'){
        //     self.dataSpv = res[i].DataSpv
        //   }
        // }
        //console.log("data user = ", self.items);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>