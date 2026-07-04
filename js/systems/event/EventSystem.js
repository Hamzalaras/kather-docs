

export class EventSystem {
    constructor(name) {
        this.name = name;
        this.events = new Map();
    };

    eventExist(eventName) {
        return this.events.has(eventName);
    };


    on(eventName, eventHandler) {
        if (!this.eventExist(eventName)) {
            this.events.set(eventName, new Set());
        }

        const eventHandlers = this.events.get(eventName);
        eventHandlers.add(eventHandler);

        return eventHandler;
    };

    once(eventName, eventHandler) {

        let reference;
        const wrapper = async (data) => {
            try {
                return await eventHandler(data);                
            } finally {
                this.off(eventName, reference);
            }
        };

        reference = this.on(eventName, wrapper);
        return reference;

    };

    async chainedEmit({ eventName, ...data }) {
        if (!this.eventExist(eventName)) return;

        const handlers = Array.from(this.events.get(eventName));

        let index = 0;
        const next = async (updatedData = data) => {
            if (index < handlers.length) {
                const handler = handlers[index++];
                await handler({ next,  ...updatedData });
            }
        };

        await next(data);
    };

    async emit({ eventName, ...data }) {
        if (!this.eventExist(eventName)) return;

        const handlers = this.events.get(eventName);
        const result = await Promise.allSettled([...handlers].map(handler => handler({ ...data })));
        return result;
    };

    off(eventName, eventHandler) {
        if (!this.eventExist(eventName)) return;
        this.events.get(eventName).delete(eventHandler);
    }

    offAll() {
        this.events.clear();
    }
}