import { initEmitListener } from '../../../../systems/event/listeners.js';
import { mapReceivers } from '../../../../utils/mapReceivers.js';
import { getCachedRouteVal } from '../../../../routes/routes.js';

const startBtnEmitListener = () => initEmitListener({
    eventName: 'click:get-started-btn', 
    emitMethod: 'emit',
    currentPath: '#/',
    targetPath: '#/documentation',
    addToHistory: true,
});

const resizeCnvsEmitListener = () => {
    const getParams = () => {
        const homePageState = getCachedRouteVal({ pathName: '#/' }).depot.pageState.homePageState;
        return {
            cnvs: homePageState.elements.linesCnvs,
            timerContainer: homePageState.timers,
        };
    };
    return initEmitListener({
        eventName: 'resize-cnvs',
        emitMethod: 'emit',
        getParams,
    });
};


const homePageMainReceivers = () => {
    const receivers = new Map();
    receivers.set('#get-started-btn', [
            {
                event: 'click',
                listeners: [startBtnEmitListener()],
            },
        ]
    );
    receivers.set(window,[
            {
                event: 'resize',
                listeners: [resizeCnvsEmitListener()],
            },
        ]
    );
    return receivers;
};

export const getHomePageMainMappedReceivers = () => mapReceivers({ receivers: homePageMainReceivers });