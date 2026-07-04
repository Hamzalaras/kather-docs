import { setGlobalsEventsSystems } from './globalVariables/globalEventsSystems.js';
import { activeEventsSystems } from '../systems/navigation/initPage.js';
import { prepareEventsSystems } from './events/eventsSystems.js';


export const initGlobals = () => {
    const activatedGlobalsEventsSystems = activeEventsSystems({ eventsSystems: prepareEventsSystems() });
    setGlobalsEventsSystems({ globalsEventsSystemsMap: activatedGlobalsEventsSystems });
};



