


export const clearButtonHandler = ({ responseOutput, getParams }) => {
    if (typeof getParams === 'function') {
        ({ responseOutput } = getParams());
    }
    responseOutput.textContent = 'Nothing here yet, try some of our suggestions !!';
};