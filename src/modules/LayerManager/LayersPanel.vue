<template>
  <div class="panel-wrapper">
    <ScaleTransition>
      <i v-show="!showPanel" class="material-icons layer-toggle" @click="togglePanel">layers</i>
    </ScaleTransition>
    <ScaleTransition>
      <div v-show="showPanel" class="layers-panel">
        <div class="panel-header">
          <i class="material-icons md-18">layers</i>
          <h3 class="title">Layers</h3>
          <i class="material-icons md-18 close-btn" @click="togglePanel">clear</i>
        </div>
        <div v-if="isLayersLoading" class="loader-wrapper">
          <Loader />
        </div>
        <LayerItem
          v-for="layer in layers"
          :key="layer.id"
          :name="layer.name"
          :value="layer.value"
          :isActive="layer.isActive"
          @click="setActiveLayer({ layerId: layer.id })"
        />
        <SourceDetails
          :lastUpdated="getLastUpdated"
          :sourceURL="'https://github.com/CSSEGISandData/COVID-19'"
          :sourceName="'Johns Hopkins CSSE'"
        />
      </div>
    </ScaleTransition>
  </div>
</template>

<script>
import LayerItem from "./LayerItem";
import { mapActions, mapGetters } from "vuex";
import { ScaleTransition } from "vue2-transitions";
import Loader from "@/components/Loader";
import SourceDetails from "@/modules/LayerManager/SourceDetails";

export default {
  props: {
    layers: Array
  },
  components: {
    LayerItem,
    ScaleTransition,
    Loader,
    SourceDetails
  },

  computed: {
    ...mapGetters("Covid19", ["isLayersLoading", "getLastUpdated"]),
    ...mapGetters("UI", ["isLayerControlsVisible"]),
    showPanel: {
      get() {
        return this.isLayerControlsVisible;
      },
      set(value) {
        this.setLayerControlsVisible(value);
      }
    }
  },
  methods: {
    ...mapActions("Covid19", ["setActiveLayer", "fetchLastUpdated"]),
    ...mapActions("UI", ["setLayerControlsVisible"]),
    togglePanel() {
      this.showPanel = !this.showPanel;
    }
  },
  mounted() {
    this.fetchLastUpdated();
  }
};
</script>

<style lang="scss" scoped>
.panel-wrapper {
  position: absolute;
  top: 12px;
  left: 12px;
}
.layer-toggle {
  padding: 10px;
  background: var(--color-primary);
  border-radius: 50%;
  position: absolute;
  transition: 0.3s all ease-in-out;

  &:hover {
    cursor: pointer;
    color: var(--color-accent);
  }

  &:active {
    transform: scale(0.9);
  }
}

.layers-panel {
  display: flex;
  flex-direction: column;
  width: 300px;
  background: var(--color-secondary);
  z-index: 99;
  border-radius: 5px;

  .loader-wrapper {
    background-color: var(--color-primary);
    border-radius: 0 0 5px 5px;
  }

  .panel-header {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background: var(--color-primary);
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid var(--border-color);

    .title {
      margin-left: 10px;
      flex: 1;
    }

    .close-btn {
      padding: 5px;
      border-radius: 50%;
      transition: 0.3s all ease-in-out;
      &:hover {
        cursor: pointer;
        color: var(--color-accent);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
}
</style>
