<template>
  <v-container>
    <div>
      <div class="row mx-0">
        <h1>Officers</h1>
        <v-spacer></v-spacer>
        <v-btn icon color="blue" @click="onAdd()">
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </div>

      <div class="vertical-spacer"></div>

      <base-input placeholder="Search" v-model="searchKey"></base-input>
      <div class="vertical-spacer"></div>

      <div>
        <!-- TODO: Disable filter for other columns -->
        <v-data-table
          :search="searchKey"
          :headers="headers"
          :items="officers"
          :items-per-page="5"
          class="elevation-1 table-item"
          @click:row="onItemClick($event)"
        ></v-data-table>
      </div>
    </div>
  </v-container>
</template>

<script>
import { fetchAll } from "../../../../services/officers";

export default {
  name: "officer",
  data() {
    return {
      headers: [
        {
          text: "Officer ID",
          align: "left",
          sortable: false,
          value: "officer_id"
        },
        { text: "Full name", value: "full_name" },
        { text: "Base station", value: "police_station" },
        { text: "Total fines issued", value: "fines_issued" },
        { text: "Contact Number", value: "contact_number" },
        { text: "Permission Level", value: "permission_level" }
      ],
      officers: [],
      searchKey: ""
    };
  },
  methods: {
    fetchAll() {
      fetchAll()
        .then(res => {
          this.officers = res.data.data.map(officer => {
            return {
              officer_id: officer.officer_id,
              full_name: officer.first_name + " " + officer.last_name,
              police_station: officer.police_station,
              fines_issued: officer.fines_issued.length,
              contact_number: officer.contact_number,
              permission_level: officer.permission_level
            };
          });
          console.log(this.officers);
        })
        .catch(err => console.log(err));
    },
    onItemClick(event) {
      this.$router.push({ path: `/console/profile/${event.officer_id}` });
    },
    onAdd() {
      this.$router.push({ path: `/console/officers/add` });
    }
  },
  created() {
    this.fetchAll();
  }
};
</script>

<style lang="scss" scoped>
tr {
  color: blue !important;
}

.table-item {
  cursor: pointer;
}
</style>
