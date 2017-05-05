import {windowActions, windowCheckWidthInterface} from "../../actions/Window";
/**
 * Created by achernushevich on 04.05.17.
 */

const wideLine = 600;

export interface windowWideInterface {
    isWindowWide: boolean
}

const DEFAULT_STATE: windowWideInterface = {
    isWindowWide: window.innerWidth > wideLine
};

const _setWindowSize = (state: any) => {
    return {
        ...state,
        isWindowWide: window.innerWidth > wideLine
    }
};

export const WindowIsWide = (state = DEFAULT_STATE, action: windowCheckWidthInterface) => {
    switch (action.type) {
        case windowActions.CHECK_WIDTH:
            return _setWindowSize(state);
        default:
            return state;
    }
};

export const WindowIsWideState = (state: any) => state.WindowIsWide;