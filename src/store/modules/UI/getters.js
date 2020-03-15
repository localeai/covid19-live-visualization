export default {
  isControlsVisible: (state) => {
    return state.isVisualizationsVisible || state.isLayersVisible;
  },
  isLayerControlsVisible: (state) => state.isLayersVisible,
  isVisualizationControlsVisible: (state) => state.isVisualizationsVisible
};
