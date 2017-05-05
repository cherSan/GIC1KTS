import {menuActions, menuInterface} from "../../actions/Menu";
/**
 * Created by achernushevich on 04.05.17.
 */
const DEFAULT_STATE = {
    menuOpened: false,
};

const _open = (state: any) => {
    return {
        ...state,
        menuOpened: true,
    }
};

const _hide = (state: any) => {
    return {
        ...state,
        menuOpened: false,
    }
};

export const Menu = (state = DEFAULT_STATE, action: menuInterface) => {
    switch (action.type) {
        case menuActions.OPEN:
            return _open(state);
        case menuActions.HIDE:
            return _hide(state);
        default:
            return state;
    }
};

export const MenuState = (state: any) => state.Menu;