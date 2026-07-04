import { initEmitListener } from '../../../../systems/event/listeners.js';
import { mapReceivers } from '../../../../utils/mapReceivers.js';
import { getCachedRouteVal } from '../../../../routes/routes.js';

const aboutPageMainReceivers = () => {
    const receivers = new Map();
    return receivers;
};

export const getAboutPageMainMappedReceivers = () => mapReceivers({ receivers: aboutPageMainReceivers });