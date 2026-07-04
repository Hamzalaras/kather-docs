import { toggleClass } from '../../../../utils/elementsManipulation/toggles.js';


export const disableElements = ({ playGroundPageState }) => {
    const { endpointInput, buttons } = playGroundPageState.elements;
    const { suggestButton, sendCancelButton, clearButton } = buttons;

    [suggestButton, clearButton, endpointInput].forEach(btn => toggleClass({
        element: btn,
        classVals: ["opacity-50", "cursor-not-allowed", "pointer-events-none"],
        applyOrRemove: 'apply', 
    }));
    sendCancelButton.textContent = 'cancel';
};

export const enableElements = ({ playGroundPageState }) => {
    const { endpointInput, buttons } = playGroundPageState.elements;
    const { sendCancelButton, suggestButton, clearButton } = buttons;

    [suggestButton, clearButton, endpointInput].forEach(btn => toggleClass({
        element: btn,
        classVals: ["opacity-50", "cursor-not-allowed", "pointer-events-none"],
        applyOrRemove: 'remove', 
    }));
    sendCancelButton.textContent = 'send';
};