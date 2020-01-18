<template>
  <div>
    <v-container>
      <div>
        <h1>
          Recent News
        </h1>
        <div class="vertical-spacer"></div>

    <div>
      <base-dropdown title="District" class="btn-filter">
        <div class="nav-filter" @click="onFilterAdd()">
              Colombo
      </div>
      </base-dropdown>
    </div>

    <div class="vertical-spacer"></div>

      <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      News Headling
    </v-card-title>

    <v-card-text>
        The gazette notice to increase fines to Rs.25,000 with regard to seven traffic offences was issued on Monday night, the Transport Ministry said.According to the gazette notice, the ministry will present the new traffic fines to parliament after amending the Motor Traffic Act.
        </v-card-text>
  </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "news"
};
</script>

<style lang="scss" scoped></style>
