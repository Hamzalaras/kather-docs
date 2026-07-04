import { toggleClass } from '../../../utils/elementsManipulation/toggles.js';


export const toggleMore = ({ eventObject }) => {
    const [moreContainer, arrow] = [
        eventObject.currentTarget.parentElement.querySelector('[id$="-docs"]'),
        eventObject.currentTarget.querySelector('.text-xs'),
    ];
    toggleClass({
        element: moreContainer,
        classVals: ['hidden'],
    });
    arrow.textContent = arrow.textContent.trim() === '▲' ? '▼' : '▲';
};