import { initPageEventSystemMaker, initRegisterCb } from '../../../../systems/event/customize.js';
import { EventSystem } from '../../../../systems/event/EventSystem.js';
import { cnvsLoopWrapper } from '../../../../utils/cnvs/loopWrapper.js';

class HomePageLinesHoldersEvents extends EventSystem {};

export const makeHomePageLinesHoldersEventSystem = initPageEventSystemMaker({
    className: 'HomePageLinesHoldersEvents',
    classInstance: HomePageLinesHoldersEvents,
});


const registerPoolSwitch = initRegisterCb({ eventName: 'pool-switch', registerMethod: 'on' });

const registerFitCnvs = initRegisterCb({ eventName: 'start-lines-animation', registerMethod: 'once' });
const registerStartLinesLoop = initRegisterCb({ eventName: 'start-lines-animation', registerMethod: 'once' });
const registerStopLinesLoop = initRegisterCb({ eventName: 'stop-lines-loop', register: 'once' });





export const registerHomePageLinesHoldersCustomEvents = ({ eventSystem, cbs }) => {
    const customEventsReferences = new Map();

    customEventsReferences.set('poolSwitch:pool-switch',
        registerPoolSwitch(eventSystem, cbs.poolSwitch));

    customEventsReferences.set('fitCnvs:start-lines-animation',
        registerStartLinesLoop(eventSystem, cbs.fitCnvs));
    customEventsReferences.set('startLinesLoop:start-lines-animation',
        registerStartLinesLoop(eventSystem, cnvsLoopWrapper({ loopFn: cbs.startLinesLoop})));
    customEventsReferences.set('stopLinesLoop:stop-lines-loop',
        registerStopLinesLoop(eventSystem, cbs.stopLinesLoop));

    return customEventsReferences;
};