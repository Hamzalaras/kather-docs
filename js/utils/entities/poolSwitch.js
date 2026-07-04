

export const poolSwitch = ({ currentPool, targetPool, entity }) => {
    currentPool.delete(entity.key);
    targetPool.set(entity.key, entity);
    return entity;
};
