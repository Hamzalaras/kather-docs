import { globalDomElements } from '../globalVariables/globalDomElements.js';

export const popupState = {
    elements: globalDomElements.static.popup,
    timers: {
        popupContainerOpacity: null,
    },
    isActive: false,

    reset() {
        this.elements.popupTitle.textContent = 'Error';
        this.elements.popupContent.textContent = 'Unexpected error has occur :(';
        this.timers.popupContainerOpacity = null;
        this.isActive = false;
    },
};