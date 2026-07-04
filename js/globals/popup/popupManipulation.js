import { popupState } from './popupState.js';
import { toggleClass } from '../../utils/elementsManipulation/toggles.js';

export const quickPopupShow = ({ eventSystem: globalEventSystem }) => {
    if (popupState.isActive) return;
    popupState.isActive = true;

    const { popupContainer } = popupState.elements;
    toggleClass({ element: popupContainer, classVals: ['hidden'], applyOrRemove: 'remove'});
    popupState.elements.popupContainer.offsetWidth;
    toggleClass({ element: popupContainer, classVals: ['opacity-0'], applyOrRemove: 'remove' });
    toggleClass({ element: popupContainer, classVals: ['opacity-100'], applyOrRemove: 'apply'});
    
    popupContainer.addEventListener('transitionend', eventObj => {
        if (eventObj.target === popupContainer && eventObj.propertyName === 'opacity') { 
            popupState.timers.popupContainerOpacity = setTimeout(async () => {
                await globalEventSystem.emit({ eventName: 'quick-popup-hide', eventSystem: globalEventSystem });
            }, 2_000);
        }
    }, { once: true });
};

export const quickPopupHide = ({ eventSystem: globalEventSystem }) => {
    if (!popupState.isActive) return;

    if (popupState.timers.popupContainerOpacity) clearTimeout(popupState.timers.popupContainerOpacity);
    
    const { popupContainer } = popupState.elements;
    toggleClass({ element: popupContainer, classVals: ['opacity-100'], applyOrRemove: 'remove'});
    toggleClass({ element: popupContainer, classVals: ['opacity-0'], applyOrRemove: 'apply'});
    popupContainer.addEventListener('transitionend', eventObj => {
        if (eventObj.target === popupContainer && eventObj.propertyName === 'opacity') {
            toggleClass({ element: popupContainer, classVals: ['hidden'], applyOrRemove: 'apply'});
            popupState.reset();
        }
    }, { once: true });
};