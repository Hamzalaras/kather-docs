import { getGlobalDepotValue } from '../globalVariables/globalDepot.js';
import { getGlobalEvents } from '../globalVariables/globalEventsSystems.js';

export const popstateHandler = async ({ eventObject, eventSystem }) => {
    const flags = getGlobalDepotValue({ mainKey: 'flags' });
    if (flags.openChangePageGate) return;
    
    const globalEventSystem = getGlobalEvents({ name: 'global' });
    const [currentHash, targetHash] = 
        [
            new URL(eventObject.oldURL).hash ,
            new URL(eventObject.newURL).hash,
        ];
    const [currentPath, targetPath] = 
        [
            currentHash === '' ? '#/' : currentHash,
            targetHash === '' ? '#/' : targetHash,
        ];
    if (!currentPath || !targetPath) {
        await globalEventSystem.emit({
            eventName: 'non-fatal-error',
            eventSystem: globalEventSystem,
            title: 'Navigation Error',
            message: 'Path not found',
        });
    }

    await globalEventSystem.emit({
        eventName: 'click:nav-bar',
        currentPath: `${currentPath}`,
        targetPath: `${targetPath}`,
    });
};