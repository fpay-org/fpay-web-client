<template>
  <v-app-bar app dark elevation="0">
    <Login></Login>
  </v-app-bar>
</template>

<script>
import Login from "../auth/Login";

export default {
  name: "Appbar",
  components: {
    Login
  },
  methods: {
    openLogin() {
      console.log("Fuck");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>