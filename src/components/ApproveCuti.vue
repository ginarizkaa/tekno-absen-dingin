<template>
  <div class="q-pa-md">
    <q-table
      :dense="$q.screen.lt.md"
      title="Cuti"
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nama',
          align: 'left',
          field: row => row.jeniscuti,
          sortable: false
        },
                
        {
          name: 'name',
          required: true,
          label: 'Jenis Cuti',
          align: 'left',
          field: row => row.jeniscuti,
          sortable: false
        },
        {
          name: 'awalcuti',
          required: true,
          label: 'Awal Cuti',
          align: 'left',
          field: row => row.status,
          sortable: false
        },
        {
          name: 'akhircuti',
          required: true,
          label: 'Akhir Cuti',
          align: 'left',
          field: row => row.createAt,
          sortable: false
        },
        {
          name: 'createAt',
          required: true,
          label: 'Keterangan',
          align: 'left',
          field: row => row.createAt,
          sortable: false
        },
        {
          name: 'createAt',
          required: true,
          label: 'Approve',
          align: 'left',
          field: row => row.createAt,
          sortable: false
        },
      ],
      data:[]
    }
  },
}
</script>