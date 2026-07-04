import { mapReceivers } from '../../utils/mapReceivers.js';


export const initEmitListener = ({ eventName, emitMethod = 'emit', ...additionalData }) => {

    return ({ eventReceiver, eventToListen, eventSystem, signal }) => {
        eventReceiver.addEventListener(eventToListen, async eventObject => {
            await eventSystem[emitMethod]?.({ eventName, eventObject, eventSystem, ...additionalData });
        }, { signal });
    }
};