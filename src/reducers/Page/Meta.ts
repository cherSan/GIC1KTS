import {actionPage} from "../../actions/Page";
/**
 * Created by achernushevich on 02.05.17.
 */


const DEFAULT_STATE = {
    pageName: 'Test meta',
};

const _setPageMeta = (state: any, meta: any) => {
    return {
        ...state,
        pageName: meta.pageName,
    }
};

export const PageMeta = (state = DEFAULT_STATE, action: any) => {
    switch (action.type) {
        case actionPage.SET_META:
            return _setPageMeta(state, action.data);
        default:
            return state;
    }
};

export const statePageMeta = (state: any) => state.PageMeta;