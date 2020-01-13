<template>
  <v-container>
    <div class="row">
      <v-card outlined>
        <v-card-title>
          Total fines
        </v-card-title>
        <div class="flex-spacer"></div>
        <v-card-text>
          16636
        </v-card-text>
      </v-card>
      <v-card outlined>
        <v-card-title>
          Total fines paid
        </v-card-title>
        <v-card-text>
          16636
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "analytics"
};
</script>

<style lang="scss" scoped>
.flex-spacer {
  flex: 1 1 auto;
}
</style>
