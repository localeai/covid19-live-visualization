export const types = {
  SET_LAYERS: "SET_LAYERS",
  SET_ACTIVE_LAYER: "SET_ACTIVE_LAYER",
  SET_SCATTER_PLOT_DATA: "SET_SCATTER_PLOT_LAYER",
  SET_GEO_JSON_DATA: "SET_GEO_JSON_LAYER",
  SET_LAYER_LOADING: "SET_LAYER_LOADING",
  SET_DATA_LOADING: "SET_DATA_LOADING",
  SET_ACTIVE_VISUALIZATION: "SET_ACTIVE_VISUALIZATION",
  SET_POPUP_DATA: "SET_POPUP_DATA",
  SET_LAST_UPDATED: "SET_LAST_UPDATED"
};

export default {
  [types.SET_LAYERS]: (state, layers) => {
    state.layers = layers;
    state.layersById = Object.keys(layers);
    state.activeLayer = state.layersById[0];
  },
  [types.SET_ACTIVE_LAYER]: (state, layerId) => {
    state.activeLayer = layerId;
  },
  [types.SET_SCATTER_PLOT_DATA]: (state, data) => {
    state.scatterplotData = data;
  },
  [types.SET_GEO_JSON_DATA]: (state, data) => {
    state.geojsonData = data;
  },
  [types.SET_LAYER_LOADING]: (state, flag) => {
    state.isLayersLoading = flag;
  },
  [types.SET_DATA_LOADING]: (state, flag) => {
    state.isDataLoading = flag;
  },
  [types.SET_ACTIVE_VISUALIZATION]: (state, visualization) => {
    state.activeVisualization = visualization;
  },
  [types.SET_POPUP_DATA]: (state, data) => {
    state.popupData = data;
  },
  [types.SET_LAST_UPDATED]: (state, data) => {
    state.lastUpdated = data;
  }
};
