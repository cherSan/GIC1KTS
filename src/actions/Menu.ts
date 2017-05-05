/**
 * Created by achernushevich on 04.05.17.
 */
export module menuActions {
    export const OPEN = 'MENU:OPEN';
    export const HIDE = 'MENU:HIDE';
}

export interface windowSize {
    height: number,
    width: number
}

export interface menuInterface {
    type: string,
}

export const menuOpen = ():menuInterface => {
    return  {
        type: menuActions.OPEN,
    }
};

export const menuHide = ():menuInterface => {
    return  {
        type: menuActions.HIDE,
    }
};