
export const routes = new Map();
export const cachedRoutes = new Map();

export const getRouteVal = async ({ pathName }) => {
    if (cachedRoutes.has(pathName)) {
        return cachedRoutes.get(pathName);
    }

    const loadVal = routes.get(pathName);
    if (!loadVal) return null;
    
    const val = await loadVal();
    cachedRoutes.set(pathName, val);
    return val;
};

export const getCachedRouteVal = ({ pathName }) => cachedRoutes.get(pathName);