<template>
  <div>
    <v-container>
      <h1>Heat Map</h1>

      <div class="vertical-spacer-sm"></div>

      <l-map
        :center="[7.8812049, 80.6295183]"
        :zoom="8"
        :minZoom="8"
        :maxZoom="8"
        style="height: 800px;"
        :mapOptions="mapOptions"
      >
        <l-choropleth-layer
          :data="districtData"
          titleKey="district_name"
          idKey="district_id"
          :value="value"
          :extraValues="extraValues"
          geojsonIdKey="dpto"
          :geojson="slGeojson"
          :colorScale="colorScale"
        >
          <template slot-scope="props">
            <l-info-control
              :item="props.currentItem"
              :unit="props.unit"
              title="District"
              placeholder="Please hover over a district"
              position="topright"
            />
            <l-reference-chart
              title="Fine issueing frequency"
              :colorScale="colorScale"
              :min="props.min"
              :max="props.max"
              position="topleft"
            />
          </template>
        </l-choropleth-layer>
      </l-map>
    </v-container>
  </div>
</template>

<script>
import { InfoControl, ReferenceChart, ChoroplethLayer } from "vue-choropleth";
import { LMap } from "vue2-leaflet";

import { districtData } from "../../../data/map-data";
import slGeojson from "../../../data/slGeo.json";

export default {
  name: "heatmap",
  components: {
    LMap,
    "l-info-control": InfoControl,
    "l-reference-chart": ReferenceChart,
    "l-choropleth-layer": ChoroplethLayer
  },
  data() {
    return {
      districtData,
      slGeojson,
      colorScale: ["66BB6A", "FFCA28", "FF7043"],
      value: {
        key: "amount_w",
        metric: "% girls"
      },
      extraValues: [
        {
          key: "amount_m",
          metric: "% boys"
        }
      ],
      mapOptions: {
        attributionControl: false
      }
    };
  }
};
</script>

<style lang="scss" scoped>
template {
  background-color: white !important;
}

l-info-control {
  background-color: white !important;
}
</style>
