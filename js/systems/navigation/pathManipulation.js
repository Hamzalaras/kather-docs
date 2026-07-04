
export const getTargetPath = ({ eventObject }) => {
    return eventObject?.currentTarget?.dataset?.to
        ?? eventObject?.target?.closest?.('[data-to]')?.dataset?.to
        ?? '#/';
}


export const getCurrentPath = () => {
    return window.location.hash || '#/';
};

export const addPathToHistory = ({ targetPath }) => {
    window.location.hash = targetPath;
}


export const reloadWebApp = ({ eventObject, targetPath }) => {
    if (targetPath === '/404.html') {
        window.location.pathname = targetPath;
        return;
    }
    const resolvedTargetPath = targetPath ?? getTargetPath({ eventObject }) ?? '#/';
    window.location.hash = resolvedTargetPath;
};

