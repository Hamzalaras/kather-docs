import { navBarStates } from './navBarState.js';
import { toggleClass } from '../../utils/elementsManipulation/toggles.js';



export const showNavBar = ({}) => {
    toggleClass({ 
        element: navBarStates.elements.navBarContainer,
        classVals: ['hidden'],
        applyOrRemove: 'remove',
    });
};

export const hideNavBar = ({}) => {
    toggleClass({ 
        element: navBarStates.elements.navBarContainer,
        classVals: ['hidden'],
        applyOrRemove: 'apply',
    });
};