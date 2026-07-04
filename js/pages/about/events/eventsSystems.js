import { makeAboutPageMainEventSystem, registerAboutPageMainCustomEvents } from './main/customize.js';
import { getAboutPageMainMappedReceivers } from './main/listeners.js';
import { defineAboutPageMainCbs } from '../cbs/defineCbs.js';


export const prepareHomePageEventsSystems = () => new Map([
    ['aboutPageMain', {
            cbs: defineAboutPageMainCbs,
            abortController: null,
            makePageEventSystem: makeAboutPageMainEventSystem,
            eventSystem: null,
            registerCustomEvents: registerAboutPageMainCustomEvents,
            customEventsReferences: null,
            getPageMappedReceivers: getAboutPageMainMappedReceivers,
        }
    ],
]);