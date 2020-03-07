<template>
  <div class="console-layout">
    <!-- <TopBar /> -->
    <div class="content-area">
      <DeckGL
        :accessToken="getAccessToken"
        :latitude="0"
        :longitude="0"
        :layers="[getActiveGeoLayer]"
      />
      <LayersPanel :layers="getLayers" />
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import DeckGL from "@/modules/Visualizer/DeckGL";
import LayersPanel from "@/modules/LayerManager/LayersPanel";
import { fetchBreif } from "@/api/covid19";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    TopBar,
    DeckGL,
    LayersPanel
  },
  data() {
    return {
      geoLayers: []
    };
  },
  computed: {
    ...mapGetters("Covid19", ["getLayers", "getGeoData", "getActiveGeoLayer"]),
    getAccessToken() {
      return process.env.VUE_APP_MAPBOX_TOKEN;
    }
  },
  methods: {
    ...mapActions("Covid19", ["fetchLayers", "fetchGeoData"])
  },
  watch: {
    getActiveGeoLayer(value) {
      console.log(value)
    }
  },
  mounted() {
    this.fetchLayers();
    this.fetchGeoData();
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
  }
}
</style>
