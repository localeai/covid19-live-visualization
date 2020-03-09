import { covid19Api } from './client';

// Send across the timestamp so that the browser doesn't cache the responses

const fetchLayers = () => {
    return covid19Api.get(`/layers.json?ts=${new Date().getTime()}`);
}

const fetchScatterplotLayer = () => {
    return covid19Api.get(`/sctterplot.json?ts=${new Date().getTime()}`);
}

const fetchGeoJSONLayer = () => {
    return covid19Api.get(`/geo.json?ts=${new Date().getTime()}`);
}

export {
    fetchLayers,
    fetchScatterplotLayer,
    fetchGeoJSONLayer
}