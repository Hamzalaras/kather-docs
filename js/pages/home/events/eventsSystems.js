import { makeHomePageMainEventSystem, registerHomePageMainCustomEvents } from './main/customize.js';
import { getHomePageMainMappedReceivers } from './main/listeners.js';
import { makeHomePageLinesHoldersEventSystem, registerHomePageLinesHoldersCustomEvents } from './lines/customize.js';
import { getHomePageLinesHoldersMappedReceivers } from './lines/listeners.js';
import { homePageMainCbs, homePageLinesHoldersCbs } from '../cbs/defineCbs.js';


export const prepareHomePageEventsSystems = () => new Map([
    ['homePageMain', {
            cbs: homePageMainCbs,
            abortController: null,
            makePageEventSystem: makeHomePageMainEventSystem,
            eventSystem: null,
            registerCustomEvents: registerHomePageMainCustomEvents,
            customEventsReferences: null,
            getPageMappedReceivers: getHomePageMainMappedReceivers,
        }
    ],
    ['homePageLinesHolders', {
            cbs: homePageLinesHoldersCbs,
            abortController: null,
            makePageEventSystem: makeHomePageLinesHoldersEventSystem,
            eventSystem: null,
            registerCustomEvents: registerHomePageLinesHoldersCustomEvents,
            customEventsReferences: null,
            getPageMappedReceivers: getHomePageLinesHoldersMappedReceivers,
        }
    ],
]);