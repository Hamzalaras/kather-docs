


export const cancelApiCall = ({ playGroundPageState }) => {
    if (!playGroundPageState.apiCall.isSending) return;
    playGroundPageState.apiCall.abortController.controller.abort();
};