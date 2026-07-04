import { popupState } from '../popup/popupState.js';


export const nonFatalErrorHandler = async ({ title = 'ERROR', message = 'Unexpected error has occur :(', eventSystem: globalEventSystem }) => {
    const { popupTitle, popupContent } = popupState.elements;
    popupTitle.textContent = title;
    popupContent.textContent = message;
    await globalEventSystem.emit({ eventName: 'quick-popup-show', eventSystem: globalEventSystem });
};