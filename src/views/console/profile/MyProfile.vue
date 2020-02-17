<template>
  <v-container>
    <div class="row header-row">
      <h1>Your profile</h1>
      <v-spacer></v-spacer>
      <v-btn icon color="blue" @click="onEdit()">
        <v-icon>mdi-account-edit</v-icon>
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
      <div class="row justify-center">
        {{ me.first_name }} {{ me.last_name }}
      </div>
      <div class="vertical-spacer-lg"></div>
      <v-card outlined>
        <v-card-subtitle class="card-subtitle"
          >Personal Details</v-card-subtitle
        >
        <div class="vertical-spacer-sm"></div>
        <v-card-text>
          <div class="row card-content justify-content-around">
            <div>
              Officer ID:&nbsp;
              <span>{{ me.officer_id }} </span>
            </div>
            <div>
              Role:&nbsp;
              <span>{{ me.permission_level }} </span>
            </div>
            <div>
              Police Station:&nbsp;
              <span>{{ me.police_station }} </span>
            </div>
          </div>
          <div class="row card-content justify-content-around">
            <div>
              NIC:&nbsp;
              <span>{{ me.nic }} </span>
            </div>
            <div>
              Contact Number:&nbsp;
              <span>{{ me.contact_number }} </span>
            </div>
            <div>
              Email:&nbsp;
              <span>{{ me.email }} </span>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { getToken } from "../../../services/jwt";
import { me } from "../../../services/auth";

export default {
  name: "MyProfile",
  data() {
    return {
      isLoading: true,
      me: {}
    };
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
    onEdit() {
      this.$router.push({ path: "/console/me/edit" });
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
