

export const toggleClass = ({ element, classVals = [], applyOrRemove }) => {
    classVals.forEach(classVal => element.classList.toggle(classVal, (applyOrRemove && applyOrRemove === 'apply')));
};