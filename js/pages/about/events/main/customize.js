import { initPageEventSystemMaker, initRegisterCb } from '../../../../systems/event/customize.js';
import { EventSystem } from '../../../../systems/event/EventSystem.js';

class AboutPageMainEvents extends EventSystem {};

export const makeAboutPageMainEventSystem = initPageEventSystemMaker({ 
    className: 'AboutPageMainEvents', classInstance: AboutPageMainEvents,
});
export const registerAboutPageMainCustomEvents = ({ eventSystem , cbs }) => {
    
    const customEventsReferences = new Map();   
    return customEventsReferences;
};