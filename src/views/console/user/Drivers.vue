<template>
  <v-container>
    <div>
      <h1>
        Drivers
      </h1>

      <div class="vertical-spacer"></div>

      <base-input placeholder="Search" v-model="searchKey"></base-input>
      <div class="vertical-spacer"></div>

      <div>
        <!-- TODO: Disable filter for other columns -->
        <v-data-table
          :search="searchKey"
          :headers="headers"
          :items="drivers"
          :items-per-page="5"
          class="elevation-1 table-item"
          @click:row="onItemClick($event)"
        ></v-data-table>
      </div>
    </div>
  </v-container>
</template>

<script>
import { fetchAll } from "../../../services/drivers";

export default {
  name: "driver",
  data() {
    return {
      headers: [
        {
          text: "Driver NID",
          align: "left",
          sortable: false,
          value: "nid"
        },
        { text: "Full name", value: "full_name" },
        { text: "License number", value: "license_number" },
        { text: "Total fines recieved", value: "fines_recieved" },
        { text: "Contact number", value: "contact_number" }
      ],
      drivers: [],
      searchKey: ""
    };
  },
  methods: {
    fetchAll() {
      fetchAll()
        .then(res => {
          this.drivers = res.data.data.map(driver => {
            return {
              nid: driver.nid,
              full_name: driver.first_name + " " + driver.last_name,
              license_number: driver.license_number,
              fines_recieved: driver.fines.length,
              contact_number: driver.contact_number
            };
          });
        })
        .catch(err => console.log(err));
    },
    onItemClick(event) {
      this.$router.push({ path: `/console/profile/${event.nid}` });
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

.tabel-item {
  cursor: pointer;
}
</style>
