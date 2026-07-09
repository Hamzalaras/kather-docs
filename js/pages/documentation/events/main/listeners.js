import { initEmitListener } from '../../../../systems/event/listeners.js';
import { mapReceivers } from '../../../../utils/mapReceivers.js';

const moreElementsEmitListener = () => initEmitListener({
    eventName: 'click:more-elements',
    emitMethod: 'emit',
});

const hashLinksEmitListener = () => initEmitListener({
    eventName: 'click:hash-links',
    emitMethod: 'emit',
});


const documentationPageMainReceivers = () => {
    const receivers = new Map();

    receivers.set('[id$="-more"]', [
            {
                event: 'click',
                listeners: [moreElementsEmitListener()],
            },
        ]
    );
    receivers.set('[id$="-link"]', [
            {
                event: 'click',
                listeners: [hashLinksEmitListener()],
            },
        ]
    );
    return receivers;
};

export const getDocumentationPageMainMappedReceivers = () => mapReceivers({ receivers: documentationPageMainReceivers });