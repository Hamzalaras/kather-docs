import { makePlayGroundPageState } from '../../state/playGroundState.js'


export const initPageState = ({ routeVal }) => {
    routeVal.depot.pageStates = {
        playGroundPageState: makePlayGroundPageState({ eventsSystems: routeVal.eventsSystems }),
        clearOnClose: true,
    };
};