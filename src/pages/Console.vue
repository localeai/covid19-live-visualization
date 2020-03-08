<template>
  <div class="console-layout">
    <!-- <TopBar /> -->
    <div class="content-area">
      <DeckGL
        :accessToken="getAccessToken"
        :latitude="0"
        :longitude="0"
        :layers="geoLayers"
      />
      <LayersPanel :layers="getLayers" />
      <MapChooser :visualizations="getVisualizations" />
      <GeoPopup/>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import DeckGL from "@/modules/Visualizer/DeckGL";
import LayersPanel from "@/modules/LayerManager/LayersPanel";
import MapChooser from "@/modules/MapManager/MapChooser";
import GeoPopup from "@/components/GeoPopup";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TopBar,
    DeckGL,
    LayersPanel,
    MapChooser,
    GeoPopup
  },
  data() {
    return {
      geoLayers: [],
      
    };
  },
  computed: {
    ...mapGetters("Covid19", ["getLayers", "getVisualizations"]),
    getAccessToken() {
      return process.env.VUE_APP_MAPBOX_TOKEN;
    }
  },
  methods: {
    ...mapActions("Covid19", ["fetchLayers", "fetchScatterplotLayerData", "fetchGeoJSONLayerData", "getActiveGeoLayer"]),
    async loadLayers() {
      this.geoLayers = [await this.getActiveGeoLayer()]
    }
  },
  watch: {
    getLayers(value) {
      this.loadLayers();
    },
    getVisualizations(value) {
      this.loadLayers();
    }
  },
  async mounted() {
    this.fetchLayers();
    this.fetchScatterplotLayerData();
    this.fetchGeoJSONLayerData();
  }
};
</script>

<style lang="scss" scoped>
.console-layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content-area {
    display: flex;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>
