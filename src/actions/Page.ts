/**
 * Created by achernushevich on 02.05.17.
 */
export module pageActions {
    export const SET_META = 'PAGE:SET_META';
}

export interface pageMeta {
    pageName: string
}

export interface pageSetMetaInterface {
    type: string,
    data: pageMeta
}

export const pageSetMeta = (meta: pageMeta) => {
    return  {
        type: pageActions.SET_META,
        data: meta
    }
};