<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense nav>
        <div v-for="navigation in navigations" :key="navigation.id">
          <v-expansion-panels v-if="navigation.expansion" flat accordion>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div class="row">
                  <v-icon>{{ navigation.icon }}</v-icon>
                  <div class="nav-id">{{ navigation.id | toNavTitle }}</div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div v-for="child in navigation.children" :key="child">
                  <div class="nav-item" @click="onNavigation(child)">
                    {{ child | toNavTitle }}
                  </div>
                  <div class="vertical-spacer-sm"></div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-list-item
            v-if="!navigation.expansion"
            class="sidenav-item"
            link
            @click="onNavigation(navigation.id)"
          >
            <v-list-item-action>
              <v-icon>{{ navigation.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ navigation.id | toNavTitle }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>FPAY Console</v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="!!me">{{ me.first_name }}</span>
      <v-menu offset-y open-on-hover transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list nav min-width="180">
          <div class="row justify-center">
            <v-avatar v-if="!!me" size="120">
              <img :src="me.avatar_url" alt="User avatar here" />
            </v-avatar>
          </div>
          <div class="vertical-spacer-sm"></div>
          <div v-for="name in dropdown" :key="name">
            <v-list-item link @click="onDropClick(name)">
              <v-list-item-title>{{ name }}</v-list-item-title>
            </v-list-item>
          </div>
        </v-list>
      </v-menu>
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
import { getToken } from "../../services/jwt";
import { me } from "../../services/auth";

export default {
  name: "console",
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    me: null,
    dropdown: ["Profile", "Log Out"],
    navigations: [
      {
        id: "analytics",
        icon: "mdi-view-dashboard",
        expansion: true,
        children: ["analytics", "heatmap"]
      },
      {
        id: "news-feed",
        icon: "mdi-newspaper-variant-multiple",
        expansion: false
      },
      {
        id: "penalties",
        icon: "mdi-clipboard-outline",
        expansion: false
      },
      {
        id: "reports",
        icon: "mdi-file-chart",
        expansion: false
      },
      {
        id: "user-management",
        icon: "mdi-account",
        expansion: true,
        children: ["officers", "drivers"]
      },
      {
        id: "settings",
        icon: "mdi-settings",
        expansion: false
      }
    ]
  }),
  created() {
    this.fetchMe();
  },
  methods: {
    onNavigation(id) {
      const path = `/console/${id}`;
      if (this.$route.path !== path) this.$router.push(path);
    },
    onDropClick(name) {
      switch (name) {
        case "Profile":
          this.$router.push({ path: "/console/me" });
          break;
        case "Log Out":
          this.$router.push({ path: "/components/dialogs/login" });
          break;
      }
    },
    fetchMe() {
      const token = getToken();
      me(token).then(res => {
        this.me = res.data.data;
      });
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

<style lang="scss" scoped>
.nav-id {
  margin-left: 2rem;
  font-size: 12px;
  font-weight: 500;
  align-self: center;
}

.nav-item {
  margin-left: 2rem;
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  align-self: center;
  cursor: pointer;
}

.nav-item:hover {
  background-color: #f6f6f6;
}

.vertical-spacer-sm {
  height: 1rem;
}

.back-full {
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: #c4dfe4;
}
</style>
