<template>
  <div class="container mt-4" >

    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="5%">No</th>
          <th width="10%">Nama</th>
          <th width="10%">Jenis Cuti</th>
          <th width="10%">Awal Cuti</th>
          <th width="10%">Akhir Cuti</th>
          <th width="10%">Ket</th>
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
            {{ item.jenis_cuti }}
          </td>
          <td>
            {{ item.awal_cuti }}
          </td>
          <td>
            {{ item.akhir_cuti }}
          </td>
          <td>
            {{ item.ket }}
          </td>
          <td>
            <q-btn icon="check" @click="updateProduct(item)" />
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
        { nama: 'Dindin', jenis_cuti: 'Cuti Tahunan', awal_cuti: '14-5-2019', akhir_cuti: '14-5-2019', ket: 'Maless' },
        { nama: 'Gina', jenis_cuti: 'Cuti Hamil', awal_cuti: '18-8-2019', akhir_cuti: '14-1-2020', ket: 'Anak 2' },
        { nama: 'Bootcamp', jenis_cuti: 'Cuti Ibadah', awal_cuti: '13-4-2019', akhir_cuti: '14-5-2019', ket: 'Umroh' },
      ]
    }
  },
}
</script>

<style>

</style>

