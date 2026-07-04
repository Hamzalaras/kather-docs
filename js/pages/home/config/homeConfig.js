
const FONTS = [
    "'Segoe UI', Tahoma, Arial, sans-serif",
    "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
    "system-ui, -apple-system, sans-serif",
    "'Dubai', 'Segoe UI', Tahoma, sans-serif",
    "'Traditional Arabic', 'Times New Roman', serif",
    "'Microsoft Uighur', 'Traditional Arabic', serif",
    "'Sakkal Majalla', 'Times New Roman', serif",
    "'Simplified Arabic', 'Times New Roman', serif"
];

export const makeLineHolderConfig = () => ({
    x: 0,
    y: () => Math.floor(Math.random() * (window.innerHeight - 100)) + 50,
    speed: () => Math.random() * 0.05 + 0.03,
    font: () => `${Math.floor(Math.random() * 12) + 16}px ${FONTS[(Math.floor(Math.random() * FONTS.length))]}`,
    content: () => Math.random() > 0.5 ? 'content' : 'content_nd',
    metrics: ({ line, ctx}) => {
        ctx.save();
        ctx.font = line.font;
        const metrics = ctx.measureText(line.content);
        const width = metrics.width;
        const height = metrics.actualBoundingBoxDescent + metrics.actualBoundingBoxAscent;
        ctx.restore();
        return { width, height };
    },
    generateInterval: 2_000,
});