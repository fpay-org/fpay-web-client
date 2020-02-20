<template>
  <v-container>
    <div>
      <h1>
        Fine Issue and Payments
      </h1>
    </div>

    <div class="vertical-spacer"></div>

    <div>
      <base-dropdown title="District" class="btn-filter">
        <div class="nav-filter" @click="onFilterAdd()">
          <div v-for="name in dropdown" :key="name">
            <v-list-item link @click="onDropClick(name)">
              <v-list-item-title>{{ name }}</v-list-item-title>
            </v-list-item>
          </div>
        </div>
      </base-dropdown>
    </div>

    <div class="vertical-spacer"></div>

    <v-card elevation="1">
      <div class="row">
        <div class="col-6">
          <ve-histogram
            :settings="chartSettings"
            :data="paymentData"
            :events="chartEvents"
          ></ve-histogram>
        </div>
        <div class="col-6">
          <ve-line :data="chartData"></ve-line>
        </div>
      </div>
    </v-card>

    <!-- <div class="vertical-spacer"></div>

    <v-card elevation="1">
      <div class="row">
        <div class="col-6">
          <ve-histogram
            :settings="chartSettings"
            :data="paymentData"
            :events="chartEvents"
          ></ve-histogram>
        </div>
        <div class="col-6">
          <ve-line :data="chartData"></ve-line>
        </div>
      </div>
    </v-card>

    <div class="vertical-spacer"></div>

    <v-card elevation="1">
      <div class="row">
        <div class="col-6">
          <ve-histogram
            :settings="chartSettings"
            :data="paymentData"
            :events="chartEvents"
          ></ve-histogram>
        </div>
        <div class="col-6">
          <ve-line :data="chartData"></ve-line>
        </div>
      </div>
    </v-card> -->
  </v-container>
</template>

<script>
import { VeLine, VeHistogram } from "v-charts";

export default {
  name: "analytics",
  data() {
    return {
      chartSettings: {
        colors: ["#ffffff", "#d2f234"]
      },
      chartData: {
        columns: ["date", "violations"],
        rows: [
          { date: "MON", violations: 24 },
          { date: "TUE", violations: 18 },
          { date: "WED", violations: 30 },
          { date: "THU", violations: 22 },
          { date: "FRI", violations: 15 },
          { date: "SAT", violations: 28 },
          { date: "SUN", violations: 26 }
        ]
      },
      paymentData: {
        columns: ["month", "issued", "payed"],
        rows: [
          { month: "JAN", issued: 123, payed: 100 },
          { month: "FEB", issued: 135, payed: 130 },
          { month: "MAR", issued: 110, payed: 110 },
          { month: "APR", issued: 143, payed: 135 },
          { month: "MAY", issued: 129, payed: 120 },
          { month: "JUNE", issued: 132, payed: 120 }
        ]
      },
      chartEvents: {
        click: function(e) {
          console.log(e.name);
        }
      },
      dropdown: [
        "Colombo",
        "Anuradapura",
        "Jaffana",
        "Matara",
        "Gampaha",
        "Kandy",
        "Galle",
        "Kaluthara",
        "Puttlam"
      ]
    };
  },
  components: {
    VeLine,
    VeHistogram
  },
  methods: {
    onDropClick(name) {}
  }
};
</script>

<style lang="scss" scoped>
.row {
  margin-left: 1rem;
  margin-right: 1rem;
}

.icon-menu {
  color: white;
}

.nav-filter {
  cursor: pointer;
}

.nav-filter:hover {
  color: blue;
}
</style>
