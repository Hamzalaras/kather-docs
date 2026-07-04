export const SERVER = 'https://kather.onrender.com';
export const localhost = 'http://localhost:3001';

export const API_PREFIX_V1 = 'v1';

export const POETRY_ENDPOINTS = {
	POETS: `${SERVER}/${API_PREFIX_V1}/poets`,
	POEMS: `${SERVER}/${API_PREFIX_V1}/poems`,
	LINES: `${SERVER}/${API_PREFIX_V1}/lines`,
};

export const V1_RESOURCE_PATHS = {
	...POETRY_ENDPOINTS,
	CATALOG: `${SERVER}/${API_PREFIX_V1}/catalog`,
	HEALTH: `${SERVER}/${API_PREFIX_V1}/health`,
	READY: `${SERVER}/${API_PREFIX_V1}/ready`
};