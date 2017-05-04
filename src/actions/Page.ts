/**
 * Created by achernushevich on 02.05.17.
 */
export module actionPage {
    export const SET_META = 'SET_META';
}

export const setPageMeta = (meta: any) => {
    return  {
        type: actionPage.SET_META,
        data: meta
    }
};