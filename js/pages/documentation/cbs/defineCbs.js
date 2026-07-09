import { changePageTo } from '../../../systems/navigation/changePageTo.js';
import { hashLinksHandler } from '../hashLinks/hashLinks.js';
import { toggleMore } from '../moreManipulation/showHideMore.js';


export const documentationPageMainCbs = () => ({
    changePageTo, toggleMore, hashLinksHandler,
});