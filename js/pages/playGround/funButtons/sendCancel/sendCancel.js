import { sendApiCall } from './send.js';
import { cancelApiCall } from './cancel.js';



export const sendCancelButtonHandler = ({ playGroundPageState, getParams }) => {
    if (typeof getParams === 'function') {
        ({ playGroundPageState } = getParams());
    }

    const { eventSystem } = playGroundPageState.apiCall;
    if (playGroundPageState.apiCall.isSending) {
        eventSystem.emit({ eventName: 'enable-elements', playGroundPageState });
        cancelApiCall({ playGroundPageState });
    } else {
        eventSystem.emit({ eventName: 'disable-elements', playGroundPageState });
        sendApiCall({ playGroundPageState });
    }
};