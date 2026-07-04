import { changePageTo } from './changePageTo.js';
import { getCurrentPath } from './helpers/pathManipulation.js';
import { globalErrorSystem } from '../errorSystem/error.js';

const popstateHandler = async (event) => {
    try {
        await changePageTo({
            currentPath: event.state?.pagePath,
            targetPath: getCurrentPath(), 
            addToHistory: false,
        });
    } catch (error) {
        globalErrorSystem.handle({ 
            error,
            context: 'popstateHandler:changePageTo:popstate.js',
        });
    }
};

export const activePopstateListener = () => window.addEventListener('popstate', popstateHandler);
