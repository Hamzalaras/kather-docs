


const makeLineHolderValid = ({ lineHolder, state: homePageState }) => {

    const isValid = () => {
        for (const [, lineHolderEntity] of homePageState.lineHolder.pools.activeLineHolder) {
            if ((lineHolder.y >= lineHolderEntity.y && lineHolder.y <= lineHolderEntity.y + lineHolderEntity.height) ||
                (lineHolderEntity.y >= lineHolder.y && lineHolderEntity.y <= lineHolder.y + lineHolder.height)
                ) return false;
        }
        return true;
    };
    let [maxAttempts, currentAttempt] = [20, 1];

    for (; currentAttempt < maxAttempts; currentAttempt++) {
        lineHolder.y = homePageState.lineHolder.config.y();
        if (isValid()) return lineHolder;
    }

    return null;
};

export const generateLineHolder = ({ state: homePageState }) => {
    const { inactiveLineHolder, EntityClass } = homePageState.lineHolder.pools;

    const lineHolder = inactiveLineHolder.values().next().value?.reset() ?? 
                       new EntityClass({ pageState: homePageState });
    const validLineHolder = makeLineHolderValid({ lineHolder, state: homePageState });
    if (validLineHolder) {
        validLineHolder.activate();
        return validLineHolder;
    }
    return null;
};