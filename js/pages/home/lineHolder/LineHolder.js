


export class LineHolder {
    constructor({ pageState }) {
        this.pageState = pageState;
        this.state = this.pageState.lineHolder;
        this.applyConfig();
        this.key = crypto.randomUUID();
    };

    getLine() {
        const [currentPool, targetPool] = this.state.pools.unusedLines.size ? 
                    ['unusedLines', 'usedLines'] : ['usedLines', 'usedLines'];
        const line = this.state.pools[currentPool].values().next().value;

        this.state.eventSystem.emit({ 
            eventName: 'pool-switch', 
            currentPool: this.state.pools[currentPool],
            targetPool: this.state.pools[targetPool],
            entity: line,
        });
        return line;

    };

    applyConfig() {
        this.x = this.state.config.x;
        this.y = this.state.config.y();
        this.speed = this.state.config.speed();
        this.font = this.state.config.font();
        this.line = this.getLine();
        this.content = this.line[this.state.config.content()];
        this.author = this.line.author;
        const { width, height } = this.state.config.metrics({ line: this, ctx: this.pageState.elements.linesCnvsCtx });
        this.width = width;
        this.height = height;
    };

    updatePosition(deltaTime) {
        this.x += deltaTime * this.speed;
        if (this.x - this.width > this.pageState.elements.linesCnvs.width) {
            this.deactivate();
        }
    };

    drawText() {
        this.pageState.elements.linesCnvsCtx.font = this.font;
        this.pageState.elements.linesCnvsCtx.fillText(this.content, this.x, this.y);
    };

    activate() {
        this.active = true;
        this.state.eventSystem.emit({
            eventName: 'pool-switch',
            currentPool: this.state.pools.inactiveLineHolder,
            targetPool: this.state.pools.activeLineHolder,
            entity: this,
        });
    };
    
    deactivate() {
        this.active = false;
        this.state.eventSystem.emit({
            eventName: 'pool-switch',
            currentPool: this.state.pools.activeLineHolder,
            targetPool: this.state.pools.inactiveLineHolder,
            entity: this,
        });
    };

    reset() {
        this.applyConfig();
        return this;
    };
};