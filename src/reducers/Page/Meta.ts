import {pageActions, pageMeta, pageSetMetaInterface} from "../../actions/Page";
/**
 * Created by achernushevich on 02.05.17.
 */


const DEFAULT_STATE: pageMeta = {
    pageName: '',
};

const _setPageMeta = (state: any, meta: pageMeta) => {
    return {
        ...state,
        pageName: meta.pageName,
    }
};

export const PageMeta = (state = DEFAULT_STATE, action: pageSetMetaInterface) => {
    switch (action.type) {
        case pageActions.SET_META:
            return _setPageMeta(state, action.data);
        default:
            return state;
    }
};

export const PageMetaState = (state: any) => state.PageMeta;