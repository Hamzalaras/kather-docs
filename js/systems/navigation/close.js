
export const closeAbortController = ({ eventSystemInfo }) => {
    eventSystemInfo.abortController.controller.abort();
    eventSystemInfo.abortController.controller = null;
    eventSystemInfo.abortController.signal = null;
    eventSystemInfo.abortController = null;
};

export const closeEventsSystem = ({ routeVal }) => {
    for (const [, eventSystemInfo] of routeVal.eventsSystems) {
        closeAbortController({ eventSystemInfo });
        eventSystemInfo.eventSystem.offAll();
        eventSystemInfo.eventSystem = null;
        eventSystemInfo.customEventsReferences.clear();
        eventSystemInfo.customEventsReferences = null;
        eventSystemInfo.mappedReceivers = null;
    }
};


const clearDepot = ({ objToClear }) => {

    for (const key of Object.keys(objToClear)) {
        const val = objToClear[key];
        if (!val) continue;
        if (typeof val === 'object') {
            if (val.clearOnClose) delete objToClear[key];
            else clearDepot(val);
        } else {
            delete objToClear[key];
        }
    }
};


export const closePage = async ({ routeVal }) => {
    for (const func of routeVal.specials.functionsToRunOnPageClose()) {
        await func({ routeVal });
    }

    closeEventsSystem({ routeVal });
    clearDepot({ objToClear: routeVal.depot });
};