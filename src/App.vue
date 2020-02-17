<template>
  <!-- <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      
    </v-content>
  </v-app>-->

  <scaffold></scaffold>
</template>

<script>
import scaffold from "./views/Scaffold";

export default {
  name: "App",
  components: {
    scaffold
    // HelloWorld
  },
  created() {
    // this.$vuetify.theme.dark = true;
  }
};
</script>
<style lang="scss">
@import "../node_modules/leaflet/dist/leaflet.css";

.vertical-spacer-lg {
  height: 2rem;
}

.vertical-spacer {
  height: 1rem;
}

.vertical-spacer-sm {
  height: 0.5rem;
}
</style>
