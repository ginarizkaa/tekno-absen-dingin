<template>
  <q-layout view="lHh Lpr lFf" class="front">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title>
          <div style="text-align:center;">Tekno Absen</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="front">
      <router-view />
      <footery v-if="['home'].indexOf($route.name) > -1"/>
      <footerx v-if="['mainmenu'].indexOf($route.name) > -1"/>
      <footerz v-if="['admin','map2','map','absen', 'approval','izincuti','approvecuti'].indexOf($route.name) > -1"/>
      <footerw v-if="['status','statuspagi','statuspulang','statuscuti',].indexOf($route.name) > -1"/>
    </q-page-container>

  </q-layout>
</template>

<script>
import Footerz from "@/components/Footerz.vue"
import Footery from "@/components/Footery.vue"
import Footerx from "@/components/Footerx.vue"
import Footerw from "@/components/Footerw.vue"
export default {
  name: "LayoutDefault",

  components: {
    Footerz,
    Footery,
    Footerx,
    Footerw
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
.front {
  background-color: #171929;
  color:white;
}
</style>
