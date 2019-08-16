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
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-btn flat icon="navigate_before" />
        <q-space></q-space>
        <q-btn flat icon="exit_to_app" to="/"/>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: "LayoutDefault",

  components: {
    
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
