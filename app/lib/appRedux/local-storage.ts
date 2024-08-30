import { RootState } from "./store";

const LOCAL_STORAGE_KEY = "resume-builder-parser-state";

export const saveStateToLocalStorage = (state: RootState) => {
  try {
    const { _persist, ...stateToSave } = state; // Exclude `_persist`
    const stringifiedState = JSON.stringify(stateToSave);
    localStorage.setItem(LOCAL_STORAGE_KEY, stringifiedState);
  } catch (e) {
    console.error("Error saving state to local storage", e);
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const stringifiedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!stringifiedState) return undefined;
    return JSON.parse(stringifiedState);
  } catch (e) {
    return undefined;
  }
};

export const getHasUsedAppBefore = () => Boolean(loadStateFromLocalStorage());
