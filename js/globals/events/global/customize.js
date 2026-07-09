import { initPageEventSystemMaker, initRegisterCb } from '../../../systems/event/customize.js';
import { EventSystem } from '../../../systems/event/EventSystem.js';

class GlobalEvents extends EventSystem {};

export const makeGlobalEventSystem = initPageEventSystemMaker({
    className: 'Global', classInstance: GlobalEvents,
});

const registerQuickPopupShow = initRegisterCb({ eventName: 'quick-popup-show', registerMethod: 'on' });
const registerQuickPopupHide = initRegisterCb({ eventName: 'quick-popup-hide', registerMethod: 'on' });

const registerFatalErrorHandler = initRegisterCb({ eventName: 'fatal-error', registerMethod: 'on' });
const registerNonFatalErrorHandler = initRegisterCb({ eventName: 'non-fatal-error', registerMethod: 'on' });

const registerChangePageTo = initRegisterCb({ eventName: 'click:nav-bar', registerMethod: 'on' });

const registerPopstateHandler = initRegisterCb({ eventName: 'popstate', registerMethod: 'on' });

export const registerGlobalCustomEvents = ({ eventSystem, cbs }) => {
    const customEventsReferences = new Map();

    customEventsReferences.set('quickPopupShow:quick-popup-show',
        registerQuickPopupShow(eventSystem, cbs.quickPopupShow));
    customEventsReferences.set('quickPopupHide:quick-popup-hide',
        registerQuickPopupHide(eventSystem, cbs.quickPopupHide));

    customEventsReferences.set('fatalErrorHandler:fatal-error',
        registerFatalErrorHandler(eventSystem, cbs.fatalErrorHandler));
    customEventsReferences.set('nonFatalErrorHandler:non-fatal-error',
        registerNonFatalErrorHandler(eventSystem, cbs.nonFatalErrorHandler));

    customEventsReferences.set('changePageTo:click:nav-bar',
        registerChangePageTo(eventSystem, cbs.changePageTo));
    customEventsReferences.set('popstateHandler:popstate',
        registerPopstateHandler(eventSystem, cbs.popstateHandler));

    return customEventsReferences;
};