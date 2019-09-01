<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <StatusPagi />
      <StatusPulang />
      <StatusCuti />
    </q-page-container>
  </q-layout>
</template>

<script>
import StatusPagi from "@/components/StatusPagi.vue";
import StatusPulang from "@/components/StatusPulang.vue";
import StatusCuti from "@/components/StatusCuti.vue";
export default {
  name: "LayoutDefault",

  components: {
    StatusPagi,
    StatusPulang,
    StatusCuti
  },

  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  }
};
</script>

<style>
</style>
