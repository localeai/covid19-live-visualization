export default function initialState() {
    return {
        layers: {},
        layersById: [],
        activeLayer: null,
        geoData: [],
        isLayersLoading: true,
        isDataLoading: false
    }
}