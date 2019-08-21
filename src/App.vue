<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title>
          <div style="text-align:center;">Tekno Absen</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <footery v-if="['home'].indexOf($route.name) > -1"/>
      <footerx v-if="['mainmenu'].indexOf($route.name) > -1"/>
      <footerz v-if="['map2','map','status','statuspagi','statuspulang','statuscuti','absen', 'approval','izincuti','approvecuti'].indexOf($route.name) > -1"/>
    </q-page-container>

  </q-layout>
</template>

<script>
import Footerz from "@/components/Footerz.vue"
import Footery from "@/components/Footery.vue"
import Footerx from "@/components/Footerx.vue"
export default {
  name: "LayoutDefault",

  components: {
    Footerz,
    Footery,
    Footerx
  },
  beforeCreate() {
  },

  data() {
    return {
      
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  
};
</script>

<style>
</style>
