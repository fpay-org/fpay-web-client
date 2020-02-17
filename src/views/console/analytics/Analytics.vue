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
          Colombo
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
        columns: ["date", "sales"],
        rows: [
          { date: "MON", sales: 123 },
          { date: "FEB", sales: 1223 },
          { date: "MAR", sales: 2123 },
          { date: "APR", sales: 4123 },
          { date: "MAY", sales: 3123 },
          { date: "JUNE", sales: 7123 }
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
      }
    };
  },
  components: {
    VeLine,
    VeHistogram
  },
  methods: {
    onFilterAdd() {
      console.log("Sex");
    }
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

.btn-filter {
  color: blue;
}

.nav-filter {
  cursor: pointer;
}

.nav-filter:hover {
  color: blue;
}
</style>
