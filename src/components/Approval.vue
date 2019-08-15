<template>
  <div class="q-pa-md">
    <q-table
      :dense="$q.screen.lt.md"
      title="Kehadiran"
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
          field: row => row.projectName,
          sortable: false
        },
        {
          name: 'status',
          required: true,
          label: 'Status',
          align: 'left',
          field: row => row.status,
          sortable: false
        },
        {
          name: 'createAt',
          required: true,
          label: 'Stamptime',
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