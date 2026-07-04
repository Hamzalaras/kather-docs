import { changePageTo } from '../../../systems/navigation/changePageTo.js';
import { toggleMore } from '../moreManipulation/showHideMore.js';


export const documentationPageMainCbs = () => ({
    changePageTo, toggleMore,
});