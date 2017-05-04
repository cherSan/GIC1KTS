/**
 * Created by achernushevich on 02.05.17.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

export function storeConfig (initialState?: any) {
    const logger = createLogger();

    const enhancer = compose(
        applyMiddleware(thunk, logger)
    );

    const store = createStore(
        rootReducer,
        initialState,
        enhancer
    );

    return store;
}
