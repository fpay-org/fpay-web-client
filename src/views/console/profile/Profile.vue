<template>
  <v-container>
    <div class="row mx-0">
      <h1>Officer profile</h1>
      <v-spacer></v-spacer>
      <v-btn icon color="blue" @click="onEdit()">
        <v-icon>mdi-account-edit</v-icon>
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
      <div class="row justify-center">
        {{ user.first_name }} {{ user.last_name }}
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
              <span>{{ user.officer_id }} </span>
            </div>
            <div>
              Role:&nbsp;
              <span>{{ user.permission_level }} </span>
            </div>
            <div>
              Police Station:&nbsp;
              <span>{{ user.police_station }} </span>
            </div>
          </div>
          <div class="row card-content justify-content-around">
            <div>
              NIC:&nbsp;
              <span>{{ user.nic }} </span>
            </div>
            <div>
              Contact Number:&nbsp;
              <span>{{ user.contact_number }} </span>
            </div>
            <div>
              Email:&nbsp;
              <span>{{ user.email }} </span>
            </div>
          </div>
        </v-card-text>
      </v-card>
      <div class="vertical-spacer"></div>
      <v-card outlined>
        <v-card-subtitle>
          Officer Statistics
        </v-card-subtitle>
        <v-card-text>
          <ve-line :data="chartData"></ve-line>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { fetchOne } from "../../../services/officers";
import { VeLine } from "v-charts";

export default {
  name: "profile",
  data() {
    return {
      isLoading: true,
      user: {},
      chartData: {
        columns: ["date", "sales"],
        rows: [
          { date: "MON", sales: 123 },
          { date: "FEB", sales: 1223 },
          { date: "MAR", sales: 2123 },
          { date: "APR", sales: 4123 },
          { date: "MAY", sales: 3123 },
          { date: "JUNE", sales: 7123 }
        ]
      }
    };
  },
  components: {
    VeLine
  },
  methods: {
    fetchOfficer(officer_id) {
      fetchOne(officer_id).then(res => {
        this.user = res.data.data;
        console.log(this.user);
        this.isLoading = false;
      });
    },
    onEdit() {
      this.$router.push({
        path: `/console/profile/${this.user.officer_id}/edit`
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

<style scoped>
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
