export const types = {
  SET_LAYERS_CONTROLS_VISIBLE: "SET_LAYERS_CONTROLS_VISIBLE",
  SET_VISUALIZATIONS_CONTROLS_VISIBLE: "SET_VISUALIZATIONS_CONTROLS_VISIBLE"
};

export default {
  [types.SET_LAYERS_CONTROLS_VISIBLE]: (state, flag) => {
    state.isLayersVisible = flag;
  },
  [types.SET_VISUALIZATIONS_CONTROLS_VISIBLE]: (state, flag) => {
    state.isVisualizationsVisible = flag;
  }
};
