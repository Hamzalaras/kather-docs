import { LINES_SORT as linesSort,
         POEMS_SORT as poemSort,
         POETS_SORT as poetSort,
        } from '../../constants/sort.js';
import countries from '../../meta/countries.json' with { type: 'json' };
import eras from '../../meta/eras.json' with { type: 'json' };
import poemsTypes from '../../meta/poemsTypes.json' with { type: 'json' };
import quawafi from '../../meta/quawafi.json' with { type: 'json' };
import seas from '../../meta/seas.json' with { type: 'json' };
import topics from '../../meta/topics.json' with { type: 'json' };

const globalDepot = {
    katherInfo: {
        static: { 
            sort: { poetSort, poemSort, linesSort },
            meta: { countries, eras, poemsTypes, quawafi, seas, topics },
        },
        dynamic: {
            linesCount: 3364420,
            poemsCount: 124178,
            poetsCount: 2351,
        },
    },
    flags: {
        openChangePageGate: false,
    },
};
export const setInGlobalDepotValue = ({ value, mainKey, deepKeys = [] }) => {
    let holder = globalDepot;
    if (holder == null || typeof holder !== 'object') return false;

    for (const deepKey of deepKeys) {
        holder = holder[deepKey];
        if (holder == null || typeof holder !== 'object') return false;
    }

    holder[mainKey] = value;
    return true;
};
export const getGlobalDepotValue = ({ mainKey, deepKeys = [] }) => {
    let holder = globalDepot;
    if (holder == null || typeof holder !== 'object') return undefined;

    for (const deepKey of deepKeys) {
        holder = holder[deepKey];
        if (holder == null || typeof holder !== 'object') return undefined;
    }

    return holder[mainKey];
};