import { types } from "./mutations";
import {
  fetchLayers,
  fetchScatterplotLayer,
  fetchGeoJSONLayer
} from "@/api/covid19";

export default {
  /**
   * Sets a layer as active
   */
  setActiveLayer: async ({ state, commit }, { layerId }) => {
    console.log(layerId);
    // set active layer only if the current layer doesn't match the new layer
    if (state.activelayer !== layerId) {
      commit(types.SET_ACTIVE_LAYER, layerId);
    } else {
      return;
    }
  },
  /**
   * Fetches all the available layers
   */
  fetchLayers: async ({ commit }) => {
    try {
      commit(types.SET_LAYER_LOADING, true);
      const response = await fetchLayers();
      const { status, data } = response;
      if (status === 200 && data) {
        /**
         * Store the layers as key value pairs
         */
        let layers = data.reduce((result, layer) => {
          return Object.assign(result, {
            [layer.id]: {
              ...layer
            }
          });
        }, {});
        commit(types.SET_LAYERS, layers);
        commit(types.SET_LAYER_LOADING, false);
      }
    } catch (error) {
      commit(types.SET_LAYER_LOADING, false);

      console.error(error);
    }
  },
  /**
   * Fetches Geo Data
   */
  fetchScatterplotLayerData: async ({ commit }) => {
    try {
      const response = await fetchScatterplotLayer();
      const { status, data } = response;
      if (status === 200 && data) {
        commit(types.SET_SCATTER_PLOT_DATA, data);
      }
    } catch (error) {
      console.error(error);
    }
  },

  fetchGeoJSONLayerData: async ({ commit }) => {
    try {
      const response = await fetchGeoJSONLayer();
      const { status, data } = response;
      if (status === 200 && data) {
        commit(types.SET_GEO_JSON_DATA, data);
      }
    } catch (error) {
      console.error(error);
    }
  },
  /**
   * Fetch timeseries data
   */
  fetchTimeSeriesData: async () => {},
  setActiveVisualization: async ({ commit }, visualization) => {
    commit(types.SET_ACTIVE_VISUALIZATION, visualization)
  }
};
