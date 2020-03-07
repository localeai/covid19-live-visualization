import { covid19Api } from './client';

/**
 * Fetches the latest statistics for the virus
 */
const fetchBreif = () => {
    return covid19Api.get('/brief');
}

/**
 * Fetches the latest data for countries
 */
const fetchLatest = () => {
    return covid19Api.get('/latest');
}

/**
 * Fetches the timeseries data
 */
const fetchTimeSeries = () => {
    return covid19Api.get('/timeseries');
}

export {
    fetchBreif,
    fetchLatest,
    fetchTimeSeries
}