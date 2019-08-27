<template>
  <div style="text-align:center;">
    <strong style="font-size:30px;font-family: cursive;" >Database Absen</strong>
    <br>
  <div class="flex flex-center" style="width:100%">
    <div class="container mt-4" style="width:100%">
    <table class="table table-bordered mt-4" style="width:100%">
      <thead class="thead-light">
        <tr>
          <th width="5%">No</th>
          <th width="15%">Nama</th>
          <th width="10%">Keterangan</th>
          <th width="20%">Status</th>
          <th width="10%">Waktu</th>
          <th width="10%">Lokasi</th>
          <th width="15%">Action</th>
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
              <q-btn color="blue" align="center" icon="check" @click="accept(da)" />
              <q-btn color="red" icon="cancel" @click="reject(da)" />
              <q-btn color="red" icon="delete" @click="reject(da.id)" />
            </div>
            <div v-else-if="da.status === 'Rejected'">
              <q-btn color="blue" align="center" icon="check" @click="accept(da)" />
              <q-btn color="red" icon="cancel" @click="reject(da)" />
              <q-btn color="red" icon="delete" @click="reject(da.id)" />
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
  <strong style="font-size:30px;font-family: cursive;" >Database Cuti</strong>
    <br>
  <div class="flex flex-center" style="width:100%">
    <div class="container mt-4" style="width:100%">
    <table class="table table-bordered mt-4" style="width:100%">
        <thead class="thead-light">
          <tr>
            <th width="5%">No</th>
            <th width="15%">Nama</th>
            <th width="10%">Jenis Cuti</th>
            <th width="15%">Awal Cuti</th>
            <th width="15%">Akhir Cuti</th>
            <th width="10%">Ket</th>
            <th width="15%">Status</th>
            <th width="15%">Action</th>
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
              <q-btn color="blue" icon="check" @click="accept(dc)" />
              <q-btn color="red" icon="cancel" @click="updateProduct(item)" />
              <q-btn color="red" icon="delete" @click="reject(da.id)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <strong style="font-size:30px;font-family: cursive;" >Database User</strong>
    <br>
  <div class="flex flex-center" style="width:100%">
    <div class="container mt-4" style="width:100%">
    <table class="table table-bordered mt-4" style="width:100%">
      <thead class="thead-light">
        <tr>
          <th width="5%">No</th>
          <th width="20%">Id</th>
          <th width="20%">Nama</th>
          <th width="10%">Username</th>
          <th width="10%">Password</th>
          <th width="20%">idSpv</th>
          <th width="20%">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <span v-if="editIndex !== index">{{ item.id }}</span>
            <span v-if="editIndex === index">
              {{ item.id }}
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.nama }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model.number="item.nama">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.username }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model.number="item.username">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.password }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model.number="item.password">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.DataSpv.nama }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model.number="item.idSpv">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index && tambahkan === false">
              <button @click="edit(item, index)" class="btn btn-sm btn-outline-secondary mr-2">Edit</button>
              <button @click="deleteProduct(item.id)" class="btn btn-sm btn-outline-secondary mr-2">Remove</button>
            </span>
            <span v-else-if="editIndex === index && tambahkan === true">
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)">Cancel</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="addProduct(item)">Tambahkan</button>
            </span>
            <span v-else-if="editIndex === index && tambahkan === false">
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)">Cancel</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="updateProduct(item)">Save</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="col-3 offset-9 text-right my-3">
      <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">Tambah user</button>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import absensi_api from '../api/absensi/index'
import datacuti_api from '../api/datacuti/index'
import datauser_api from '../api/datauser/index'

export default {
  data () {
    return {
      dataCuti:[],
      dataUser:[],
      dataAbsensi:[],
      editIndex: null,
      originalData: null,
      items: [],
      tambahkan: false,
    }
    
  },
  
  methods:{
    add() {
      this.originalData = null
      this.items.push({ nama: '', username: '', password: '', idSpv: ''})
      this.editIndex = this.items.length - 1
      this.tambahkan = true
    },
    deleteProduct (id) {
        console.log(id)
        datauser_api
          .deleteDataUser(window, id)
          .then(function(result){
            console.log("berhasil")
            return result;
          })
          .catch(function(err){
            console.log(err);
          }); 
        window.location.reload();
    },

    addProduct (item) {
        console.log('model', item)

        datauser_api
          .postDataUser(window, item)
          .then(function(result){
            console.log("berhasil")
            return result;
          })
          .catch(function(err){
            console.log(err);
          }); 

        window.location.reload();
    },

    updateProduct (item) {
        console.log('model', item)
        datauser_api
          .putDataUser(window, item)
          .then(function(result){
            console.log("berhasil")
            return result;
          })
          .catch(function(err){
            console.log(err);
          }); 
        window.location.reload();
    },

    delete() {
      let self = this;
      produk.deleteProduk(window, self.param).then(function(res){
          return res
      }).catch(function(err){
        console.log(err)
      });
    },

    edit(item, index) {
      this.originalData = Object.assign({}, item)
      this.editIndex = index
    },

    cancel(item) {
      this.editIndex = null
      this.tambahkan = false

      if (!this.originalData) {
        this.items.splice(this.items.indexOf(item), 1)
        return
      }

      Object.assign(item, this.originalData)
      this.originalData = null
    },

    remove(item, index) {
      this.items.splice(index, 1)
    },

    save(item) {
      this.originalData = null
      this.editIndex = null
    },
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
        console.log("data absensi = ", self.dataAbsensi)
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
        console.log("data cuti = ", self.dataCuti)
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
        console.log("data user = ", self.items)
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