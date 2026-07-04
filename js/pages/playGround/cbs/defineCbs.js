import { suggestButtonHandler } from '../funButtons/suggest/suggest.js';
import { sendCancelButtonHandler } from '../funButtons/sendCancel/sendCancel.js';
import { clearButtonHandler } from '../funButtons/clear/clear.js';
import { disableElements, enableElements } from '../funButtons/sendCancel/disableEnable.js';

export const playGroundPageMainCbs = () => ({
    suggestButtonHandler, sendCancelButtonHandler, clearButtonHandler,
    disableElements, enableElements,
});