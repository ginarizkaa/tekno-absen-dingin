<template>
  <div>
    <l-map :zoom="zoom" :center="center" style="height:600px;" >
      <l-tile-layer :options="options" :url="url" :attribution="attribution" />
      <l-marker :lat-lng="marker" />
    </l-map>

  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 15,
      center: latLng(-6.2162989,106.8442153),
      options: { color: "red" },
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png?color={color}",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(-6.1753924,106.8271528)
    };
  }
};
</script>
