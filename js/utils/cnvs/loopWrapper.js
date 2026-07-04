

export const cnvsLoopWrapper = ({ loopFn }) => {
    return ({ state, next }) => {
        if (state.cnvsAnimation.isActive) return;
        state.cnvsAnimation.isActive = true;
        const loop = loopFn({ state, next });
        state.cnvsAnimation.animationFrameId = requestAnimationFrame(loop);
    }
}