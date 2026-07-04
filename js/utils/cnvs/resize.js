
export const fitCnvs = ({ cnvs, next }) => {
    cnvs.width = window.innerWidth;
    cnvs.height = window.innerHeight;
    if (next) return next();
};

export const resizeCnvs = ({ cnvs, timerContainer, getParams = null }) => {
    if (typeof getParams === 'function') {
        ({ cnvs, timerContainer } = getParams());
    }
    clearTimeout(timerContainer.cnvsResizeTimerId);
    timerContainer.cnvsResizeTimerId = setTimeout(() => fitCnvs({ cnvs }), 250);
};