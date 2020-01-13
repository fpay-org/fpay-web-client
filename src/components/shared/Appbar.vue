<template>
  <v-app-bar app dark elevation="0">
    <login></login>
  </v-app-bar>
</template>

<script>
import login from "../dialogs/Login";

export default {
  name: "appbar",
  components: {
    login
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
