import { ScatterplotLayer } from "@deck.gl/layers";

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

  getActiveGeoLayer: state => {
    if (state.activeLayer && state.geoData && state.geoData.length > 0) {
      return new ScatterplotLayer({
        id: state.activeLayer,
        data: state.geoData,
        pickable: true,
        opacity: 0.8,
        stroked: false,
        filled: true,
        radiusScale: 6,
        radiusMinPixels: 5,
        radiusMaxPixels: 15,
        lineWidthMinPixels: 1,
        getPosition: d => [d.location.lng, d.location.lat],
        getRadius: d => (state.layers[state.activeLayer].value/d[state.activeLayer])*100,
        getFillColor: d => [255, (d[state.activeLayer]*255/state.layers[state.activeLayer].value)*255, 0]
      });
    }
  },
  getGeoData: state => {
    return state.geoData;
  }
};
