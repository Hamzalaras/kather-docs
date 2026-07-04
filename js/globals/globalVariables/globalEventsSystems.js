let globalsEventsSystems;
export const setGlobalsEventsSystems = ({ globalsEventsSystemsMap }) => globalsEventsSystems = globalsEventsSystemsMap;
export const getGlobalEvents = ({ name }) => globalsEventsSystems.get(name).eventSystem;