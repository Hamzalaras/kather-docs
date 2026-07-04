

export const initPageEventSystemMaker = ({ className, classInstance }) => () => new classInstance(className);

export const initRegisterCb = ({ eventName, registerMethod = 'on' }) => {
    return (eventSystem, cb) => {
        if (registerMethod === 'on') {
            return eventSystem.on(eventName, cb);
        } else if (registerMethod === 'once') {
            return eventSystem.once(eventName, cb);
        }
    };
};
