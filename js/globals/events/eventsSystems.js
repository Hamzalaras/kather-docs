import { makeGlobalEventSystem, registerGlobalCustomEvents } from './global/customize.js';
import { getGlobalMappedReceivers } from './global/listeners.js';
import { globalCbs } from '../cbs/defineCbs.js';

export const prepareEventsSystems = () => new Map([
    ['global', {
            cbs: globalCbs,
            abortController: null,
            makePageEventSystem: makeGlobalEventSystem,
            eventSystem: null,
            registerCustomEvents: registerGlobalCustomEvents,
            customEventsReferences: null,
            getPageMappedReceivers: getGlobalMappedReceivers,
        }
    ],
]);