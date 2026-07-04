import { initEmitListener } from '../../../systems/event/listeners.js';
import { mapReceivers } from '../../../utils/mapReceivers.js';

const windowErrorEmitListener = () => initEmitListener({
    eventName: 'fatal-error',
    emitMethod: 'emit',
});

const changePageToEmitListener = () => initEmitListener({
    eventName: 'click:nav-bar',
    emitMethod: 'emit',
    addToHistory: true,
});

export const globalReceivers = () => {
    const receivers = new Map();

    receivers.set(window, [
            {
                event: 'error',
                listeners: [windowErrorEmitListener()],
            },
        ]
    );
    receivers.set('#nav-bar-container', [
        {
            event: 'click',
            listeners: [changePageToEmitListener()],
        },
    ]);

    return receivers;
};

export const getGlobalMappedReceivers = () => mapReceivers({ receivers: globalReceivers });