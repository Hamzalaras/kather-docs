import { poolSwitch } from '../../../utils/entities/poolSwitch.js';
import { fitCnvs, resizeCnvs } from '../../../utils/cnvs/resize.js';
import { startLinesLoop } from '../animations/lines/startLinesLoop.js';
import { stopLinesLoop } from '../animations/lines/stopLinesLoop.js';
import { changePageTo } from '../../../systems/navigation/changePageTo.js';


export const homePageMainCbs = () => ({
    resizeCnvs, changePageTo,
});

export const homePageLinesHoldersCbs = () => ({
    poolSwitch, fitCnvs, startLinesLoop, stopLinesLoop,
});