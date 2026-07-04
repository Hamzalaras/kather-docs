import { initGlobals } from './globals/initGlobals.js';
import { initRoutes } from './routes/initRoutes.js';
import { getRouteVal } from './routes/routes.js';
import { initPage } from './systems/navigation/initPage.js';
import { getCurrentPath } from './systems/navigation/pathManipulation.js';
import { getGlobalEvents } from './globals/globalVariables/globalEventsSystems.js';
import { V1_RESOURCE_PATHS } from './constants/http.js';


const initUtils = () => {
    initGlobals();
};

const setupPage = async() => {
    initRoutes();
    const routeVal = await getRouteVal({ pathName: getCurrentPath() });
    await initPage({ routeVal });
};

export const startApp = async () => {   
    initUtils();
    const globalEventSystem = getGlobalEvents({ name: 'global' });
    try {
        await setupPage();
    } catch (error) {
        console.log(error);
        globalEventSystem.emit({ eventName: 'fatal-error' });
    }
};