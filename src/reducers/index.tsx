/**
 * Created by achernushevich on 02.05.17.
 */

import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {UserAuthorizeStatus} from "./User/AuthorizeStatus";
import {PageMeta} from "./Page/Meta";
import {WindowIsWide} from "./Window/IsWide";
import {Menu} from "./Menu/Menu";

export const rootReducer = combineReducers({
    routing: routerReducer,

    WindowIsWide,
    Menu,
    UserAuthorizeStatus,
    PageMeta
});

