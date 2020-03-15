<template>
  <div class="console-layout">
    <!-- <TopBar /> -->
    <div class="content-area">
      <DeckGL
        :accessToken="getAccessToken"
        :latitude="0"
        :longitude="0"
        :layers="geoLayers"
        @viewStateChange="handleViewStateChanged"
        @viewClicked="handleViewClicked"
      />

      <!-- Controls Layer -->
      <div id="controls">
        <GitHubLink />
        <LayersPanel :layers="getLayers" />
        <MapChooser :visualizations="getVisualizations" />
        <GeoPopup />
      </div>

      <!-- Hidden Layer -->
      <div @click="setHiddenLayer" v-if="isHiddenLayerVisible" id="hidden-layer"></div>
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
import GitHubLink from "@/components/GitHubLink";
import log from "@deck.gl/core/dist/es5/utils/log";

export default {
  components: {
    TopBar,
    DeckGL,
    LayersPanel,
    MapChooser,
    GeoPopup,
    GitHubLink
  },
  data() {
    return {
      geoLayers: []
    };
  },
  computed: {
    ...mapGetters("Covid19", [
      "getLayers",
      "getVisualizations",
      "getPopupData"
    ]),
    ...mapGetters("UI", ["isControlsVisible"]),
    isHiddenLayerVisible() {
      return this.$store.getters.isHiddenLayerVisible;
    },
    getAccessToken() {
      return process.env.VUE_APP_MAPBOX_TOKEN;
    }
  },
  methods: {
    ...mapActions("Covid19", [
      "fetchLayers",
      "fetchScatterplotLayerData",
      "fetchGeoJSONLayerData",
      "getActiveGeoLayer",
      "setPopupData"
    ]),
    ...mapActions("UI", ["hideControls"]),
    async loadLayers() {
      this.geoLayers = [await this.getActiveGeoLayer()];
    },
    handleViewStateChanged() {
      if (this.getPopupData.show) {
        this.setPopupData({ show: false });
      }
      // hide the controls on view state change
      if (this.isControlsVisible) {
        this.hideControls();
      }
    },
    handleViewClicked() {
       // hide the controls on view clicks
      if (this.isControlsVisible) {
        this.hideControls();
      }
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
#controls {
  z-index: 20;
}

#hidden-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.33);
}

.console-layout {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content-area {
    z-index: 20;
    display: flex;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>
