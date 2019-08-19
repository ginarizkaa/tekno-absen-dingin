<template>
  <div class="container mt-4" >

    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="5%">No</th>
          <th width="10%">Nama</th>
          <th width="10%">Status</th>
          <th width="10%">Jenis</th>
          <th width="10%">Waktu</th>
          <th width="10%">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
           {{ item.nama }}
          </td>
          <td>
            {{ item.status }}
          </td>
          <td>
            {{ item.jenis }}
          </td>
          <td>
            {{ item.waktu }}
          </td>
          <td>
            <q-btn align="center" icon="check" @click="updateProduct(item)" />
            <q-btn icon="cancel" @click="updateProduct(item)" />
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { nama: 'Dindin', status: 'Waiting', jenis: 'Absen Pagi', waktu: '08:02:21'},
        { nama: 'Gina', status: 'Acc', jenis: 'Absen Pulang', waktu: '18:43:49'},
        { nama: 'Bootcamp', status: 'Acc', jenis: 'Jarang Pulang', waktu: '00:43:49'},
      ]
    }
  }
}
</script>