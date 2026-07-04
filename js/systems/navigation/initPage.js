import { makeAbortController } from '../../utils/abortController.js';
import { globalDomElements } from '../../globals/globalVariables/globalDomElements.js';

const putHtml = ({ generateHtml }) => {
    globalDomElements.dynamic.dynamicContainer.innerHTML = generateHtml();
};

export const activeEventSystemListeners = ({ eventSystemListeners, eventSystem, signal }) => {
    for (const [receiver, events] of eventSystemListeners) { 
        for (const eventIfo of events) {
            const listeners = eventIfo.listeners;
            for (const listener of listeners) {
                listener({ eventReceiver: receiver, eventToListen: eventIfo.event, eventSystem, signal });
            }
        }
    }
};

export const activeEventsSystems = ({ eventsSystems }) => {
    for (const [, eventSystemInfo] of eventsSystems) {
        eventSystemInfo.abortController = makeAbortController();
        eventSystemInfo.eventSystem = eventSystemInfo.makePageEventSystem();
        eventSystemInfo.customEventsReferences = eventSystemInfo.registerCustomEvents({ 
            eventSystem: eventSystemInfo.eventSystem,
            cbs: eventSystemInfo.cbs(),
        });
        activeEventSystemListeners({ 
            eventSystemListeners: eventSystemInfo.getPageMappedReceivers(), 
            eventSystem: eventSystemInfo.eventSystem, 
            signal: eventSystemInfo.abortController.signal,
        });
    }
    return eventsSystems;
};




export const initPage = async ({ routeVal }) => {
    if (!routeVal) return;
    
    putHtml({ generateHtml: routeVal.generateHtml });
    
    
    try {
        routeVal.eventsSystems = activeEventsSystems({ eventsSystems: routeVal.prepareEventsSystems() })
        for (const func of routeVal.specials.functionsToRunOnPageLoad()) {
            await func({ routeVal });
        }
        
    } catch (error) {
        console.log(error);
    }
};