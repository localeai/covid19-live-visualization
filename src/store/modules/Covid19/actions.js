import { types } from "./mutations";
import { fetchBreif, fetchLatest, fetchTimeSeries } from "@/api/covid19";

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
      const response = await fetchBreif();
      const { status, data } = response;
      if (status === 200 && data) {
        /**
         * Store the layers as key value pairs
         */
        let layers = Object.keys(data).reduce((result, key) => {
          return Object.assign(result, {
            [key]: {
              id: key,
              name: key,
              value: data[key]
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
  fetchGeoData: async ({ commit }) => {
    try {
      const response = await fetchLatest();
      const { status, data } = response;
      if (status === 200 && data) {
        commit(types.SET_GEO_DATA, data);
      }
    } catch (error) {
      console.error(error);
    }
  },
  /**
   * Fetch timeseries data
   */
  fetchTimeSeriesData: async () => {}
};
