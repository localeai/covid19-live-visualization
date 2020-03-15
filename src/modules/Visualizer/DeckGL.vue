<template>
  <div class="deck-container">
    <div id="map" ref="map"></div>
    <canvas id="deck-canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
import deck, { Deck } from "@deck.gl/core";
import mapboxgl from "mapbox-gl";

export default {
  props: {
    accessToken: String,
    layers: Array
  },
  data() {
    return {
      viewState: {
        latitude: 0,
        longitude: 0,
        zoom: 2,
        pitch: 0,
        bearing: 0
      }
    };
  },
  created() {
    this.map = null;
    this.deck = null;
  },
  watch: {
    layers(value) {
      this.deck.setProps({
        layers: value
      });
    }
  },
  mounted() {
    // creating the map
    this.map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: this.$refs.map,
      interactive: false,
      style:
        this.mapStyle || "mapbox://styles/haxzie/ck7h838qb0bik1iofe0k2i3f2",
      center: [this.viewState.longitude, this.viewState.latitude],
      zoom: this.viewState.zoom,
      pitch: this.viewState.pitch,
      bearing: this.viewState.bearing
    });
    // creating the deck.gl instance
    this.deck = new Deck({
      canvas: this.$refs.canvas,
      width: "100%",
      height: "100%",
      initialViewState: this.viewState,
      controller: true,
      // change the map's viewstate whenever the view state of deck.gl changes
      onViewStateChange: ({ viewState }) => {
        this.map.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          bearing: viewState.bearing,
          pitch: viewState.pitch
        });
        this.$emit("viewStateChange");
      },
      onClick: (event, info) => {
        this.$emit("viewClicked", { event, info });
      }
    });

    // setTimeout(() => {
    //   this.deck.setProps({
    //     viewState: {
    //       ...this.viewState,
    //       zoom: 3
    //     },
    //     layers: this.layers
    //   });
    // }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.deck-container {
  width: 100%;
  height: 100%;
  position: relative;
  #map {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e5e9ec;
    overflow: hidden;
  }
  #deck-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
