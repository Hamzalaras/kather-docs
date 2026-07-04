import { initBackup, initFetchedDataObj } from '../fetchData/initBackup.js';
import { initPageState } from './funcs/initState.js';
import { emitStartLinesHoldersAnimation } from './funcs/emitLinesHoldersAnimation.js';
import { startFetchLines } from '../fetchData/fetch.js';
import { hideNavBar } from '../../../globals/navBar/navBarManipulation.js';

export const functionsToRunOnPageLoad = () => ([
    hideNavBar, initFetchedDataObj, initBackup, initPageState,
    emitStartLinesHoldersAnimation, startFetchLines,
]);