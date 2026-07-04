import { emitStopLinesHolderAnimation } from './funcs/emitLinesHoldersAnimation.js';
import { clearFetchLines } from '../fetchData/fetch.js';


export const functionsToRunOnPageClose = () => ([
    clearFetchLines, emitStopLinesHolderAnimation,
]);