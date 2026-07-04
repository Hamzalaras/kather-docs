


export const makeAbortController = () => {
    const controller = new AbortController();
    return { controller, signal: controller.signal };
};