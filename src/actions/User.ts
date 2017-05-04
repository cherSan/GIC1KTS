/**
 * Created by achernushevich on 02.05.17.
 */
export module actionUsers {
    export const SET_AUTHORIZE = 'SET_AUTHORIZE';
    export const SET_UN_AUTORIZE = 'SET_UN_AUTORIZE';
}

export const setAuthorize = () => {
    return  {
        type: actionUsers.SET_AUTHORIZE
    }
};