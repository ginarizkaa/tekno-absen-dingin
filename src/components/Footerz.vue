<template>
    <q-footer>
      <q-toolbar>
        <q-btn flat icon="navigate_before" @click="$router.go(-1)"/>
        <q-space></q-space>
        <q-btn flat icon="exit_to_app" to="/"/>
      </q-toolbar>
    </q-footer>    
</template>
