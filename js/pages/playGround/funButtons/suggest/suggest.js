import { ENDPOINTS_PARAMS } from '../../../../constants/params.js';
import { POETRY_ENDPOINTS } from '../../../../constants/http.js';
import { KATHER_INFO } from '../../../../constants/apiInfo.js';
import { randomArrEle, randomSkip } from '../../../../utils/randoms.js';


const buildSuggestion = () => {
    const randomRoute = randomArrEle(Object.keys(POETRY_ENDPOINTS));
    const routeEndpoints = ENDPOINTS_PARAMS[randomRoute];
    let [endpoint, endpointParams] = randomArrEle([...routeEndpoints]);
    
    if (endpoint.includes('/:id')) endpoint = endpoint.replace(':id', randomSkip(KATHER_INFO[randomRoute].count));

    let url = `${POETRY_ENDPOINTS[randomRoute]}${endpoint}`;

    if (!endpointParams.size) return url;

    const params = {};
    const take = Math.min(2, endpointParams.size);
    const queryParts = [];
    
    const paramsArray = [...endpointParams];

    for (let i = 0; i < take;) {
        const [paramName, paramValues] = randomArrEle(paramsArray); 
        if (params[paramName]) continue; 
        
        params[paramName] = true; 
        i++; 
        
        const paramValue = randomArrEle(paramValues);
        let finalVal = '';
        
        if (paramValue && typeof paramValue === 'object') {
            const val = randomArrEle(Object.values(paramValue));
            finalVal = Array.isArray(val) ? randomArrEle(val) : val;
        } else {
            finalVal = paramValue;
        }
        
        if (finalVal !== undefined && finalVal !== null) {
            queryParts.push(`${paramName}=${finalVal}`);
        }
    }

    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return url;
};


export const suggestButtonHandler = ({ endpointInput, getParams }) => {
    if (typeof getParams === 'function') {
        ({ endpointInput } = getParams());
    }
    endpointInput.value = buildSuggestion();
};