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
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
          @click:row="log($event)"
        ></v-data-table>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "driver",
  data() {
    return {
      headers: [
        {
          text: "Driver ID",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Full name", value: "calories" },
        { text: "Base station", value: "carbs" },
        { text: "Traffic violation", value: "fat" },
        { text: "Total Fine issued", value: "protein" },
        { text: "Total income", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ],
      searchKey: ""
    };
  },
  methods: {
    log(event) {
      console.log(event.name);
    }
  }
};
</script>

<style lang="scss" scoped>
tr {
  color: blue !important;
}
</style>
