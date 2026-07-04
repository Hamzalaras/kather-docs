import { getGlobalEvents } from '../../../globals/globalVariables/globalEventsSystems.js';
import { getGlobalDepotValue } from '../../../globals/globalVariables/globalDepot.js';
import { fetchFunc } from '../../../utils/fetch/fetchFunc.js';
import { V1_RESOURCE_PATHS } from '../../../constants/http.js';
import { randomArrEle, randomSkip } from '../../../utils/randoms.js';
import { withTimeout } from '../../../utils/withTimeout.js';

export const startFetchLines = async ({ routeVal }) => {
    const globalEventSystem = getGlobalEvents({ name: 'global' });
    const KATHER_INFO = getGlobalDepotValue({ mainKey: 'katherInfo' });
    const pageSignal = routeVal.eventsSystems.get('homePageLinesHolders')?.abortController?.signal;
    if (pageSignal == null || pageSignal.aborted) return; 

    const sort = randomArrEle(KATHER_INFO.static.sort.linesSort);
    const filterName = randomArrEle(Object.keys(KATHER_INFO.static.meta));
    const filterId = randomArrEle(KATHER_INFO.static.meta[filterName]).id;
    const url = `${V1_RESOURCE_PATHS.LINES}?${filterName}=${filterId}&sort=${sort}`;
    try {
        const data = await withTimeout({ 
            fn: ({ signal }) => fetchFunc({ url, signal }),
            passedSignals: [pageSignal],
            timeout: 20_000,
        });
        if (!data) throw new Error('Error in getting data');
        else {
            const setLines = (line) => {
                const unusedLine = {
                    key: line.id,
                    content: line.content,
                    content_nd: line.content_nd,
                    author: line.poem.poet.name_ar,
                };
                routeVal.depot.fetchedData.unusedLines.set(line.id, unusedLine);
            }
            data.data.forEach(setLines);
        }
    } catch (error) {
        if (error.name === 'AbortError' || pageSignal.aborted) return;
        await globalEventSystem.emit({
            eventName: 'non-fatal-error',
            eventSystem: globalEventSystem,
            title: 'Fetch Error',
            message: error.message,
        });
    } finally {
        if (!pageSignal.aborted && routeVal.depot.fetchedData) {
            routeVal.depot.fetchedData.fetchId = setTimeout(() => startFetchLines({ routeVal }), 30_000);
        }
    }
};
 
export const clearFetchLines = ({ routeVal }) => clearTimeout(routeVal.depot.fetchedData.fetchId);
