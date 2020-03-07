export const types = {
  SET_LAYERS: "SET_LAYERS",
  SET_ACTIVE_LAYER: "SET_ACTIVE_LAYER",
  SET_GEO_DATA: "SET_GEO_DATA",
  SET_LAYER_LOADING: "SET_LAYER_LOADING",
  SET_DATA_LOADING: "SET_DATA_LOADING"
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
  [types.SET_GEO_DATA]: (state, geoData) => {
    state.geoData = geoData;
  },
  [types.SET_LAYER_LOADING]: (state, flag) => {
    state.isLayersLoading = flag;
  },
  [types.SET_DATA_LOADING]: (state, flag) => {
    state.isDataLoading = flag;
  }
};
