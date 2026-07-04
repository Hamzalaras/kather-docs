import { makeDocumentationPageMainEventSystem, registerDocumentationPageMainCustomEvents } from './main/customize.js';
import { getDocumentationPageMainMappedReceivers } from './main/listeners.js';
import { documentationPageMainCbs } from '../cbs/defineCbs.js';


export const prepareDocumentationPageEventsSystems = () => new Map([
    ['documentationPageMain', {
            cbs: documentationPageMainCbs,
            abortController: null,
            makePageEventSystem: makeDocumentationPageMainEventSystem,
            eventSystem: null,
            registerCustomEvents: registerDocumentationPageMainCustomEvents,
            customEventsReferences: null,
            getPageMappedReceivers: getDocumentationPageMainMappedReceivers,
        }
    ],
]);