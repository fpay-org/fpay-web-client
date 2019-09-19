<template>
  <v-app>
    <Appbar></Appbar>
  </v-app>
</template>

<script>
// import BaseNav from '../components/BaseNav';
import Appbar from "../components/shared/Appbar";

export default {
  name: "Scaffold",
  components: {
    // BaseNav
    Appbar,
  }
};
</script>

<style lang="scss" scoped>
</style>