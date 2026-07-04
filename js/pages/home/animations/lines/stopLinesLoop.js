


export const stopLinesLoop = ({ state: homePageState }) => {
    if (homePageState.cnvsAnimation.isActive === false) return;

    homePageState.cnvsAnimation.isActive = false;
    cancelAnimationFrame(homePageState.cnvsAnimation.animationFrameId);
    homePageState.elements.linesCnvsCtx.clearRect(0, 0, homePageState.elements.linesCnvs.width, homePageState.elements.linesCnvs.height);
};