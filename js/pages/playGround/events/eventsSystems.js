import { makePlayGroundPageMainEventSystem, registerPlayGroundPageMainCustomEvents } from './main/customize.js';
import { getPlayGroundPageMainMappedReceivers } from './main/listeners.js';
import { playGroundPageMainCbs } from '../cbs/defineCbs.js';


export const preparePlayGroundPageEventsSystems = () => new Map([
    ['playGroundPageMain', {
            cbs: playGroundPageMainCbs,
            abortController: null,
            makePageEventSystem: makePlayGroundPageMainEventSystem,
            eventSystem: null,
            registerCustomEvents: registerPlayGroundPageMainCustomEvents,
            customEventsReferences: null,
            getPageMappedReceivers: getPlayGroundPageMainMappedReceivers,
        }
    ],
]);