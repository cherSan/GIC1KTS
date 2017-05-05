import {userActions, userSetAuthorizeInterface} from "../../actions/User";
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

export const UserAuthorizeStatus = (state = DEFAULT_STATE, action: userSetAuthorizeInterface) => {
    switch (action.type) {
        case userActions.SET_AUTHORIZE:
            return _authorizeUser(state);
        case userActions.SET_UN_AUTORIZE:
            return _unAuthorizeUser(state);
        default:
            return state;
    }
};

export const UserAuthorizeStatusState = (state: any) => state.UserAuthorizeStatus;