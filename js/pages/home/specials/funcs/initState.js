import { makeHomePageState } from '../../state/homeState.js'


export const initPageState = ({ routeVal }) => {
    const { fetchedData } = routeVal.depot;
    routeVal.depot.pageState = {
        homePageState: makeHomePageState({ fetchedData, eventsSystems: routeVal.eventsSystems }),
        clearOnClose: true,
    };
};