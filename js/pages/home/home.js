import { generateHomePage as generateHtml } from './generateHtml/generateHtml.js';
import { prepareHomePageEventsSystems as prepareEventsSystems } from './events/eventsSystems.js';
import { functionsToRunOnPageLoad } from './specials/onPageLoad.js';
import { functionsToRunOnPageClose } from './specials/onPageClose.js';

export const initHomePageRoute = () => ({
    generateHtml, prepareEventsSystems,
    eventsSystems: null,
    specials: { functionsToRunOnPageLoad, functionsToRunOnPageClose },
    depot: {},
});