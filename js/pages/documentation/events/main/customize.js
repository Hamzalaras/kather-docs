import { initPageEventSystemMaker, initRegisterCb } from '../../../../systems/event/customize.js';
import { EventSystem } from '../../../../systems/event/EventSystem.js';

class DocumentationPageMainEvents extends EventSystem{};

export const makeDocumentationPageMainEventSystem = initPageEventSystemMaker({ 
    className: 'DocumentationPageMainEvents', classInstance: DocumentationPageMainEvents,
});

const registerToggleMore = initRegisterCb({ eventName: 'click:more-elements', registerMethod: 'on' });

export const registerDocumentationPageMainCustomEvents = ({ eventSystem , cbs }) => {
    
    const customEventsReferences = new Map();
    customEventsReferences.set('toggleMore:click:more-elements',
        registerToggleMore(eventSystem, cbs.toggleMore));

    return customEventsReferences;
};