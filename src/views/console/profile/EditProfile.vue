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
          <img :src="user.avatar_url" alt="User avatar here" />
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
              v-model="user.first_name"
            ></base-input>
            <base-input
              placeholder="Last Name"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="user.last_name"
            ></base-input>
            <base-input
              placeholder="Permission Level"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="user.permission_level"
            ></base-input>
            <base-input
              placeholder="Police Station"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="user.police_station"
            ></base-input>
            <base-input
              placeholder="NIC Number"
              :disabled="!hasPermissions"
              :valid="validUsername"
              v-model="user.nic"
            ></base-input>
            <base-input
              placeholder="Contact Number"
              :valid="validUsername"
              v-model="user.contact_number"
            ></base-input>
            <base-input
              placeholder="Email"
              :valid="validUsername"
              v-model="user.email"
            ></base-input>
          </form>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { fetchOne } from "../../../services/officers";

export default {
  name: "EditProfile",
  data() {
    return {
      user: {},
      isLoading: true
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
      return this.user.permission_level > 0 ? true : false;
    }
  },
  methods: {
    fetchOfficer(offcer_id) {
      fetchOne(offcer_id).then(res => {
        this.user = res.data.data;
        console.log(this.user);
        this.isLoading = false;
      });
    },
    onCancel() {
      this.$router.push({
        path: `/console/profile/${this.user.officer_id}`
      });
    }
  },
  created() {
    const officer_id = this.$route.params.officer_id;
    console.log(officer_id);
    this.fetchOfficer(officer_id);
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
