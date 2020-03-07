import { covid19Api } from './client';

const fetchLayers = () => {
    return covid19Api.get('/layers.json');
}

const fetchScatterplotLayer = () => {
    return covid19Api.get('/sctterplot.json');
}

const fetchGeoJSONLayer = () => {
    return covid19Api.get('/geo.json');
}

export {
    fetchLayers,
    fetchScatterplotLayer,
    fetchGeoJSONLayer
}