import { initEmitListener } from '../../../../systems/event/listeners.js';
import { mapReceivers } from '../../../../utils/mapReceivers.js';

const homePageLinesHoldersReceivers = () => {
    const receivers = new Map();
    return receivers;
};

export const getHomePageLinesHoldersMappedReceivers = () => mapReceivers({ receivers: homePageLinesHoldersReceivers });