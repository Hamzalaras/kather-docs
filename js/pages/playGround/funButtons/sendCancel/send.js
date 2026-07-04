import { getGlobalEvents } from '../../../../globals/globalVariables/globalEventsSystems.js';
import { withTimeout } from '../../../../utils/withTimeout.js';
import { fetchFunc } from '../../../../utils/fetch/fetchFunc.js';
import { makeAbortController } from '../../../../utils/abortController.js';

export const sendApiCall = async ({ playGroundPageState }) => {
    if (playGroundPageState.apiCall.isSending) return;
    playGroundPageState.apiCall.isSending = true;

    const globalEventSystem = getGlobalEvents({ name: 'global' });
    
    const abortController = makeAbortController();
    playGroundPageState.apiCall.abortController = abortController;
    
    const url = playGroundPageState.elements.endpointInput.value.trim();
    try {
        if (!url) throw new Error('Please enter a valid URL before sending the API call.');
        const response = await withTimeout({
            fn: ({ signal }) => fetchFunc({ url, signal }),
            passedSignals: [abortController.signal],
            timeout: 5_000,
        });

        if (!response) throw new Error('No response received from the API call.');
        if (response.status === 'success') playGroundPageState.elements.responseOutput.textContent = JSON.stringify(response, null, 2);
        else playGroundPageState.elements.responseOutput.textContent = response;
        

    } catch (error) {
        if (error.name === 'AbortError' || abortController.signal.aborted) return;
        await globalEventSystem.emit({
            eventName: 'non-fatal-error',
            eventSystem: globalEventSystem,
            title: 'Fetch Error',
            message: error.message,
        });
    } finally {
        playGroundPageState.apiCall.isSending = false;
        playGroundPageState.apiCall.abortController = null;
        await playGroundPageState.apiCall.eventSystem.emit({
            eventName: 'enable-elements',
            playGroundPageState,
        });
    }
};