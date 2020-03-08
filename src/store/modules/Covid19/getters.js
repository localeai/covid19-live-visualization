import { ScatterplotLayer, GeoJsonLayer } from "@deck.gl/layers";
import chroma, { limits, scale } from 'chroma-js';

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
    if (state.activeVisualization === "scatterplot") {
      if (
        state.activeLayer &&
        state.scatterplotData &&
        state.scatterplotData.length > 0
      ) {
        return new ScatterplotLayer({
          id: `${state.activeLayer}_scatter`,
          data: state.scatterplotData,
          pickable: true,
          opacity: 0.8,
          stroked: false,
          filled: true,
          radiusScale: 6,
          radiusMinPixels: 5,
          radiusMaxPixels: 15,
          lineWidthMinPixels: 1,
          getPosition: d => d.location.map(item => parseFloat(item)),
          getRadius: d => d.data[state.activeLayer] * 1000,
          getFillColor: d => {
            if (d.data[state.activeLayer]) return d.colors[state.activeLayer];
            else return [0, 0, 0, 0]
          },
          onClick: (i, e) => {
            console.log({ i, e });
          }
        });
      }
    } else {
      if (state.activeLayer && state.geojsonData) {
        return new GeoJsonLayer({
          id: `${state.activeLayer}_geojson`,
          data: state.geojsonData,
          dataTransform: data => {
            console.log(data);
            return data;
          },
          pickable: true,
          stroked: false,
          filled: true,
          getFillColor: d => {
            if (d.properties.data[state.activeLayer] !== 0) {
              return d.properties.colors[state.activeLayer]
            } else {
              return [0, 0, 0, 0]
            }
          }
        });
      }
    }
  },
  getVisualizations: state => {
    return state.visualizations.map(item => {
      return {
        ...item,
        isActive: item.id === state.activeVisualization
      };
    });
  }
};
