import { initPageEventSystemMaker, initRegisterCb } from '../../../../systems/event/customize.js';
import { EventSystem } from '../../../../systems/event/EventSystem.js';

class PlayGroundPageMainEvents extends EventSystem{};

export const makePlayGroundPageMainEventSystem = initPageEventSystemMaker({ 
    className: 'PlayGroundPageMainEvents', classInstance: PlayGroundPageMainEvents,
});

export const registerSuggestButtonHandler = initRegisterCb({ eventName: 'click:suggest-button', registerMethod: 'on' });
export const registerSendCancelButtonHandler = initRegisterCb({ eventName: 'click:send_cancel-button', registerMethod: 'on' });
export const registerClearButtonHandler = initRegisterCb({ eventName: 'click:clear-button', registerMethod: 'on' });

export const registerDisableElements = initRegisterCb({ eventName: 'disable-elements', registerMethod: 'on' });
export const registerEnableElements = initRegisterCb({ eventName: 'enable-elements', registerMethod: 'on' });

export const registerPlayGroundPageMainCustomEvents = ({ eventSystem , cbs }) => {

    const customEventsReferences = new Map();
    customEventsReferences.set('suggestButtonHandler:click:suggest-button',
        registerSuggestButtonHandler(eventSystem, cbs.suggestButtonHandler));
    customEventsReferences.set('sendCancelButtonHandler:click:send_cancel-button',
        registerSendCancelButtonHandler(eventSystem, cbs.sendCancelButtonHandler));
    customEventsReferences.set('clearButtonHandler:click:clear-button',
        registerClearButtonHandler(eventSystem, cbs.clearButtonHandler));

    customEventsReferences.set('disableElements:disable-elements',
        registerDisableElements(eventSystem, cbs.disableElements));
    customEventsReferences.set('enableElements:enable-elements',
        registerEnableElements(eventSystem, cbs.enableElements));

    return customEventsReferences;
};