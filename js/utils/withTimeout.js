import { makeAbortController } from './abortController.js';


export const withTimeout = async ({ fn, passedSignals = [], timeout = 5_000 }) => {
    const { controller, signal } = makeAbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const resolvedSignal = passedSignals.length > 0 ? 
                                AbortSignal.any([ signal, ...passedSignals ]) :
                                signal;
    try {
        const response = await fn({ signal: resolvedSignal });
        return response;
    } catch (error) {
        if (signal.aborted) throw new Error('Timeout exceeded');
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
};