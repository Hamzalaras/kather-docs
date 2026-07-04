import { generateLineHolder } from '../../lineHolder/lineHolderManipulation.js';


export const startLinesLoop = ({ state: homePageState }) => {
    const loop = (timestamp) => {
        if (homePageState.cnvsAnimation.isActive === false) return;
        const deltaTime = timestamp - (homePageState.cnvsAnimation.lastInvocation ?? timestamp);
        homePageState.cnvsAnimation.lastInvocation = timestamp;

        if (timestamp - homePageState.cnvsAnimation.lastGeneratedLine > homePageState.lineHolder.config.generateInterval ||
            homePageState.cnvsAnimation.lastGeneratedLine === null
        ) {
            const line = generateLineHolder({ state: homePageState });
            if (line) homePageState.cnvsAnimation.lastGeneratedLine = timestamp;
        }

        homePageState.lineHolder.pools.activeLineHolder.forEach(lineHolder => lineHolder.updatePosition(deltaTime));
    
        homePageState.elements.linesCnvsCtx.clearRect(0, 0, homePageState.elements.linesCnvs.width, homePageState.elements.linesCnvs.height);
    
        homePageState.elements.linesCnvsCtx.save();
        homePageState.elements.linesCnvsCtx.direction = 'rtl';
        homePageState.elements.linesCnvsCtx.textAlign = 'right';
        homePageState.elements.linesCnvsCtx.fillStyle = 'black';
        homePageState.lineHolder.pools.activeLineHolder.forEach(lineHolder => lineHolder.drawText());
        homePageState.elements.linesCnvsCtx.restore();

        homePageState.cnvsAnimation.animationFrameId = requestAnimationFrame(loop);
    };

    return loop;
};