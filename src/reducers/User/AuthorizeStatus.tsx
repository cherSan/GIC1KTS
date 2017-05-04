import {actionUsers} from "../../actions/User";
/**
 * Created by achernushevich on 02.05.17.
 */


const DEFAULT_STATE = {
    isUserAuthorize: false,
};

const _authorizeUser = (state: any) => {
    return {
        ...state,
        isUserAuthorize: true,
    }
};

const _unAuthorizeUser = (state: any) => {
    return {
        ...state,
        isUserAuthorize: false,
    }
};

export const UserAuthorizeStatus = (state = DEFAULT_STATE, action: any) => {
    switch (action.type) {
        case actionUsers.SET_AUTHORIZE:
            return _authorizeUser(state);
        case actionUsers.SET_UN_AUTORIZE:
            return _unAuthorizeUser(state);
        default:
            return state;
    }
};

export const stateUserAuthorizeStatus = (state: any) => state.UserAuthorizeStatus;