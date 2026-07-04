import { showNavBar } from '../../../globals/navBar/navBarManipulation.js';
import { initPageState } from './funcs/initState.js';



export const functionsToRunOnPageLoad = () => ([
    initPageState, showNavBar,
]);