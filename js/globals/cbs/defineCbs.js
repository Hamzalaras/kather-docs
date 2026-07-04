import { changePageTo } from '../../systems/navigation/changePageTo.js';
import { fatalErrorHandler } from '../errorHandlers/fatalErrorHandler.js';
import { nonFatalErrorHandler } from '../errorHandlers/nonFatalErrorHandler.js';
import { quickPopupHide, quickPopupShow } from '../popup/popupManipulation.js';



export const globalCbs = () => ({
    fatalErrorHandler, nonFatalErrorHandler, quickPopupShow, quickPopupHide,
    changePageTo,
});

