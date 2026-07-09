import { getRouteVal, getCachedRouteVal } from '../../routes/routes.js';
import { initPage } from './initPage.js';
import { closePage } from './close.js';
import { getTargetPath, addPathToHistory, getCurrentPath } from './pathManipulation.js';
import { getGlobalEvents } from '../../globals/globalVariables/globalEventsSystems.js';
import { getGlobalDepotValue } from '../../globals/globalVariables/globalDepot.js';

export const changePageTo = async ({ currentPath, targetPath, eventObject, addToHistory = true }) => {
    const globalEventSystem = getGlobalEvents({ name: 'global' });
    const flags = getGlobalDepotValue({ mainKey: 'flags' });
    flags.openChangePageGate = true;
    
    const resolvedCurrentPath = currentPath ?? getCurrentPath();
    const resolvedTargetPath = targetPath ?? getTargetPath({ eventObject });
    
    if (resolvedCurrentPath === resolvedTargetPath) return;
    
    let currentRouteVal, targetRouteVal;
    try {
        currentRouteVal = getCachedRouteVal({ pathName: resolvedCurrentPath });
        if (!currentRouteVal) throw new Error(`Current path not found: ${resolvedCurrentPath}`);
        
        targetRouteVal = await getRouteVal({ pathName: resolvedTargetPath });
        if (!targetRouteVal) throw new Error(`Target path not found: ${resolvedTargetPath}`);
    } catch (error) {
        console.log(error);
        await globalEventSystem.emit({
            eventName: 'non-fatal-error',
            eventSystem: globalEventSystem,
            title: 'Navigation Error',
            message: error.message,
        });
        return;
    }

    if (addToHistory) {
        addPathToHistory({ targetPath: resolvedTargetPath });
    }
    
    try {
        await closePage({ routeVal: currentRouteVal });
        await initPage({ routeVal: targetRouteVal });
    } catch (error) {
        console.log(error);
        await globalEventSystem.emit({ eventName: 'fatal-error' });
        return;
    }

    setTimeout(() => flags.openChangePageGate = false, 0);
};