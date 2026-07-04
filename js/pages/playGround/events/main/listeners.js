import { initEmitListener } from '../../../../systems/event/listeners.js';
import { mapReceivers } from '../../../../utils/mapReceivers.js';
import { getCachedRouteVal } from '../../../../routes/routes.js';

const suggestButtonHandlerEmitListener = () => {
    const getParams = () => {
        const { endpointInput } = getCachedRouteVal({ pathName: '#/play-ground' }).depot
                                        .pageStates.playGroundPageState.elements;
        return { endpointInput };
    };

    return initEmitListener({
        eventName: 'click:suggest-button',
        emitMethod: 'emit',
        getParams,
    });
};

const sendCancelButtonHandlerEmitListener = () => {
    const getParams = () => {
        const { playGroundPageState } = getCachedRouteVal({ pathName: '#/play-ground' }).depot
                                        .pageStates;
        return { playGroundPageState };
    };
    
    return initEmitListener({
        eventName: 'click:send_cancel-button',
        emitMethod: 'emit',
        getParams,
    });
};

const clearButtonHandlerEmitListener = () => {
    const getParams = () => {
        const { responseOutput } = getCachedRouteVal({ pathName: '#/play-ground' }).depot
                                        .pageStates.playGroundPageState.elements;
        return { responseOutput };
    };

    return initEmitListener({
        eventName: 'click:clear-button',
        emitMethod: 'emit',
        getParams,
    });
};


const playGroundPageMainReceivers = () => {
    const receivers = new Map();
    receivers.set('#suggest-button', [
            {
                event: 'click',
                listeners: [suggestButtonHandlerEmitListener()],
            },
        ]
    );
    receivers.set('#send_cancel-button', [
            {
                event: 'click',
                listeners: [sendCancelButtonHandlerEmitListener()],
            },
        ]
    );
    receivers.set('#clear-button', [
            {
                event: 'click',
                listeners: [clearButtonHandlerEmitListener()],
            },
        ]
    );
    return receivers;
};


export const getPlayGroundPageMainMappedReceivers = () => mapReceivers({ receivers: playGroundPageMainReceivers });