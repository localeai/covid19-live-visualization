export default {
  /**
   * Get list of all layers,
   * appends the layer status info into each layer
   */
  getLayers: state => {
    return state.layersById.map(layerId => ({
      ...state.layers[layerId],
      isActive: state.activeLayer === layerId
    }));
  },
  /**
   * Returns the active layer
   */
  getActiveLayer: state => {
    return state.activeLayer;
  },
  isLayersLoading: state => {
    return state.isLayersLoading;
  },
  getPopupData: state => {
    return state.popupData;
  },
  getVisualizations: state => {
    if (state.scatterplotData && state.geojsonData) {
      return state.visualizations.map(item => {
        return {
          ...item,
          isActive: item.id === state.activeVisualization
        };
      });
    } else {
      return null;
    }
  },
  getLastUpdated: state => {
    return state.lastUpdated;
  }
};
