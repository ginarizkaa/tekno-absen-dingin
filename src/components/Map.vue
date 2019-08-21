<template>
  <div>    
    <l-map :zoom="zoom" :center="center" style="height:600px;" >
      <l-tile-layer :options="options" :url="url" :attribution="attribution" />
      <l-marker :lat-lng="withTooltip">
        <l-popup>
          <div @click="innerClick">
            {{info}}
          </div>
        </l-popup>
      </l-marker>
    </l-map>

  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
import axios from 'axios'

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup
  },
  mounted () {
    axios
      .get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat='+this.$route.params.lat+'&lon='+this.$route.params.long)
      .then(response => (this.info = response.data.display_name))
  },
  data() {
    return {
      info: null,
      zoom: 15,
      center: latLng(this.$route.params.lat, this.$route.params.long),
      showParagraph: false,
      options: { color: "red" },
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png?color={color}",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withTooltip: latLng(this.$route.params.lat, this.$route.params.long),
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    }
  }
  
};
</script>
