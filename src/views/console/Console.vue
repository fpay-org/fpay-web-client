<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense nav>
        <div v-for="navigation in navigations" :key="navigation.id">
          <v-list-item
            class="sidenav-item"
            link
            @click="onNavigation(navigation.id)"
          >
            <v-list-item-action>
              <v-icon>{{ navigation.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{
                navigation.id | toNavTitle
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>FPAY Console</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "console",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    navigations: [
      {
        id: "analytics",
        icon: "mdi-view-dashboard"
      },
      {
        id: "news-feed",
        icon: "mdi-newspaper-variant-multiple"
      },
      {
        id: "reports",
        icon: "mdi-file-chart"
      },
      {
        id: "user-management",
        icon: "mdi-account"
      },
      {
        id: "settings",
        icon: "mdi-settings"
      }
    ]
  }),
  created() {},
  methods: {
    onNavigation(id) {
      this.$router.push({ path: `/console/${id}` });
    }
  },
  filters: {
    toNavTitle: function(id) {
      if (!id) return "";
      id = id.toString().split("-");
      for (let i = 0; i < id.length; i++) {
        id[i] = id[i].charAt(0).toUpperCase() + id[i].slice(1);
      }
      return id.join(" ");
    }
  }
};
</script>

<style lang="scss" scoped></style>
