/**
 * Created by achernushevich on 04.05.17.
 */
export module windowActions {
    export const CHECK_WIDTH = 'WINDOW:CHECK_WIDTH';
}

export interface windowCheckWidthInterface {
    type: string
}

export const windowCheckWide = ():windowCheckWidthInterface => {
    return  {
        type: windowActions.CHECK_WIDTH
    }
};