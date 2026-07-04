

export const mapReceivers = ({ receivers }) => {
    const mappedReceivers = new Map();

    for (const [receiver, events] of receivers()) {
        if (!receiver) return null;
        if (typeof receiver === 'string') {
            const elements = document.querySelectorAll(receiver);
            if (!elements.length) continue;
            for (const element of elements) mappedReceivers.set(element, events);
        } else {
            mappedReceivers.set(receiver, events);
        }
    }
    return mappedReceivers;
};