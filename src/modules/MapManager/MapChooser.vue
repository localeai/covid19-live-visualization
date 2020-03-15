<template>
  <div class="map-chooser-wrapper">
    <scale-transition>
      <i v-show="!showPanel" class="material-icons panel-toggle" @click="togglePanel()">map</i>
    </scale-transition>
    <SlideXRightTransition>
      <div v-show="showPanel" class="maps-panel">
        <div class="panel-header">
          <i class="material-icons md-18">map</i>
          <h3 class="title">Visualization</h3>
          <i class="material-icons md-18 close-btn" @click="togglePanel">clear</i>
        </div>
        <div
          v-for="viz in visualizations"
          :class="['viz-item', { active: viz.isActive }]"
          :key="viz.id"
          @click="setActiveVisualization(viz.id)"
        >
          <i class="material-icons">{{ viz.icon }}</i>
          <h4>{{ viz.name }}</h4>
        </div>
      </div>
    </SlideXRightTransition>
  </div>
</template>

<script>
import { ScaleTransition, SlideXRightTransition } from "vue2-transitions";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    visualizations: Array
  },
  components: {
    ScaleTransition,
    SlideXRightTransition
  },
  computed: {
    ...mapGetters("UI", ["isVisualizationControlsVisible"]),
    showPanel: {
      get() {
        return this.isVisualizationControlsVisible;
      },
      set(value) {
        this.setVisualizationControlVisible(value);
      }
    }
  },
  methods: {
    ...mapActions("Covid19", ["setActiveVisualization"]),
    ...mapActions("UI", ["setVisualizationControlVisible"]),
    togglePanel() {
      this.showPanel = !this.showPanel;
    }
  }
};
</script>

<style lang="scss" scoped>
.map-chooser-wrapper {
  position: absolute;
  top: 12px;
  right: 12px;

  .panel-toggle {
    padding: 10px;
    background: var(--color-primary);
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.3s all ease-in-out;

    &:hover {
      cursor: pointer;
      color: var(--color-accent);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  .maps-panel {
    display: flex;
    flex-direction: column;
    width: 300px;
    background: var(--color-secondary);
    z-index: 99;
    border-radius: 5px;
    position: absolute;
    top: 0;
    right: 0;

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

    .viz-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      background-color: var(--color-primary);
      border-left: 3px solid transparent;
      border-bottom: 1px solid var(--border-color);

      i {
        padding: 10px;
        background-color: var(--color-primary-light);
        border-radius: 5px;
        margin-right: 10px;
      }

      &.active {
        color: var(--color-accent);
        border-left: 3px solid var(--color-accent);
      }

      &:last-child {
        border-radius: 0 0 5px 5px;
        border-bottom: 0;
      }
      &:hover {
        cursor: pointer;
        background: var(--color-primary-light);
      }
    }
  }
}
</style>
