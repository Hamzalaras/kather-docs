


export const makePlayGroundPageState = ({ eventsSystems }) => ({
    elements: {
        playGroundContainer: document.querySelector('#play-ground-container'),
        endpointInput: document.querySelector('#play-ground-fun-send-input'),
        buttons: {
            suggestButton: document.querySelector('#play-ground-fun-send-buttons > #suggest-button'),
            sendCancelButton: document.querySelector('#play-ground-fun-send-buttons > #send_cancel-button'),
            clearButton: document.querySelector('#play-ground-fun-send-buttons > #clear-button'),
        },
        responseOutput: document.querySelector('#response-container > #response-json'),
    },

    apiCall: {
        isSending: false,
        abortController: null,
        eventSystem: eventsSystems.get('playGroundPageMain').eventSystem,
    },

});