import { makeLineHolderConfig } from '../config/homeConfig.js';
import { LineHolder } from '../lineHolder/LineHolder.js';

export const makeHomePageState = ({ fetchedData, eventsSystems }) => ({
    elements: {
        homeContainer: document.querySelector('#home-container'),
        linesCnvs: document.querySelector('#lines-cnvs'),
        linesCnvsCtx: document.querySelector('#lines-cnvs').getContext('2d'),
    },

    lineHolder: {
        pools: {
            EntityClass: LineHolder,
            activeLineHolder: new Map(),
            inactiveLineHolder: new Map(),
            usedLines: fetchedData.usedLines,
            unusedLines: fetchedData.unusedLines,
        },
        eventSystem: eventsSystems.get('homePageLinesHolders').eventSystem,
        config: makeLineHolderConfig(),
    },

    cnvsAnimation: {
        isActive: false,
        lastInvocation: null,
        lastGeneratedLine: null,
        animationFrameId: null,
    },

    timers: {
        cnvsResizeTimerId: null,  
    },

});