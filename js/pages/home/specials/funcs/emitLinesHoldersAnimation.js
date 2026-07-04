


export const emitStartLinesHoldersAnimation = async ({ routeVal }) => {
    const homePageLinesHoldersEventSystem = routeVal.eventsSystems.get('homePageLinesHolders').eventSystem;
    const homePageState = routeVal.depot.pageState.homePageState;

    await homePageLinesHoldersEventSystem.chainedEmit({
        eventName: 'start-lines-animation',
        cnvs: homePageState.elements.linesCnvs,
        state: homePageState,
    });
};

export const emitStopLinesHolderAnimation = async ({ routeVal }) => {
    const homePageLinesHoldersEventSystem = routeVal.eventsSystems.get('homePageLinesHolders').eventSystem;

    await homePageLinesHoldersEventSystem.emit({
        eventName: 'stop-lines-loop',
        state: routeVal.depot.pageState.homePageState,
    });
};