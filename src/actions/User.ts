/**
 * Created by achernushevich on 02.05.17.
 */
export module userActions {
    export const SET_AUTHORIZE = 'USER:SET_AUTHORIZE';
    export const SET_UN_AUTORIZE = 'USER:SET_UN_AUTORIZE';
}

export interface userSetAuthorizeInterface {
    type: string,
}

export const userSetAuthorize = () => {
    return  {
        type: userActions.SET_AUTHORIZE
    }
};