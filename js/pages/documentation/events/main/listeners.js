import { initEmitListener } from '../../../../systems/event/listeners.js';
import { mapReceivers } from '../../../../utils/mapReceivers.js';
import { getCachedRouteVal } from '../../../../routes/routes.js';

const moreElementsEmitListener = () => initEmitListener({
    eventName: 'click:more-elements',
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
    return receivers;
};

export const getDocumentationPageMainMappedReceivers = () => mapReceivers({ receivers: documentationPageMainReceivers });