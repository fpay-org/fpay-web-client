<template>
  <v-container>
    <div class="row header-row">
      <h1>Edit profile</h1>
      <v-spacer></v-spacer>
      <v-btn icon @click="onCancel()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-btn icon color="blue">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </div>

    <div v-if="isLoading"></div>

    <div v-if="!isLoading">
      <div class="row justify-center">
        <v-avatar size="300">
          <img :src="me.avatar_url" alt="User avatar here" />
        </v-avatar>
      </div>
      <div class="vertical-spacer-lg"></div>
      <v-card outlined>
        <v-card-text>
          <form role="form">
            <base-input
              placeholder="First Name"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.first_name"
            ></base-input>
            <base-input
              placeholder="Last Name"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.last_name"
            ></base-input>
            <base-input
              placeholder="Permission Level"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.permission_level"
            ></base-input>
            <base-input
              placeholder="Police Station"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.police_station"
            ></base-input>
            <base-input
              placeholder="NIC Number"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="me.nic"
            ></base-input>
            <base-input
              placeholder="Contact Number"
              :valid="validUsername"
              v-model="me.contact_number"
            ></base-input>
            <base-input
              placeholder="Email"
              :valid="validUsername"
              v-model="me.email"
            ></base-input>
          </form>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { getToken } from "../../../services/jwt";
import { me } from "../../../services/auth";

export default {
  name: "EditMyProfile",
  data() {
    return {
      isLoading: true,
      me: null
    };
  },
  computed: {
    validUsername() {
      if (this.hasPermissions) {
        // Write edit logic
      }
      return null;
    },
    hasPermissions() {
      return this.me.permission_level > 0 ? true : false;
    }
  },
  methods: {
    fetchMe() {
      const token = getToken();
      me(token)
        .then(res => {
          console.log(res.data.data);
          this.me = res.data.data;
          this.isLoading = false;
        })
        .catch(err => console.log(err));
    },
    onCancel() {
      this.$router.push({ path: "/console/me" });
    }
  },
  created() {
    this.fetchMe();
  }
};
</script>

<style lang="scss" scoped>
.card-content {
  margin: 1px;
}

.card-subtitle {
  font-size: 16px;
}

.header-row {
  margin: 1px;
}
</style>
