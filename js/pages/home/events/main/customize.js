import { initPageEventSystemMaker, initRegisterCb } from '../../../../systems/event/customize.js';
import { EventSystem } from '../../../../systems/event/EventSystem.js';

class HomePageMainEvents extends EventSystem {};

export const makeHomePageMainEventSystem = initPageEventSystemMaker({ 
    className: 'HomePageMainEvents', classInstance: HomePageMainEvents,
});

const registerChangePageTo = initRegisterCb({ eventName: 'click:get-started-btn', registerMethod: 'on' });
const registerResizeCnvs = initRegisterCb({ eventName: 'resize-cnvs', registerMethod: 'on' });

export const registerHomePageMainCustomEvents = ({ eventSystem , cbs }) => {
    
    const customEventsReferences = new Map();
    customEventsReferences.set('changePageTo:click:get-started-btn',
        registerChangePageTo(eventSystem, cbs.changePageTo));
    customEventsReferences.set('resizeCnvs:resize-cnvs',
        registerResizeCnvs(eventSystem, cbs.resizeCnvs));

    return customEventsReferences;
};