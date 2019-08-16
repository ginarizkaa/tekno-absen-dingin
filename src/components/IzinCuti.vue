<template>
  <div class="flex flex-center">

    <div class="q-pa-md" style="max-width: 400px;width:100%;text-align:center;">
      
      <h3>Izin Cuti</h3>

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >

        <q-select filled v-model="model" :options="options" label="Jenis Cuti" />

        <q-input v-model="dateawal" filled type="date" hint="Awal Cuti" />

        <q-input v-model="dateakhir" filled type="date" hint="Akhir Cuti" />        

        <q-input
        v-model="text"
        filled
        type="textarea"
        hint="Keterangan"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>

    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "Login",
  data() {
    return {
      dateawal: '',
      dateakhir: '',
      model:'',
      text: '',
      options: [
        'Cuti Tahunan',
        'Cuti Sakit',
        'Cuti Dayoff',
        'Cuti Hamil',
        'Cuti Penting',
        'Cuti Bersama',
        'Cuti Besar',
        'Cuti Ibadah'
      ]
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "fas fa-exclamation-triangle",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "fas fa-check-circle",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  }
};
</script>
