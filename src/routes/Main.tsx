/**
 * Created by achernushevich on 03.05.17.
 */
import * as React from "react";
import { Route, Switch } from 'react-router-dom';
import {Tutorial} from "../containers/Tutorial/Tutorial";
import {Wrapper} from "../containers/Wrapper/Wrapper";

export const Routes = (
    <Switch>
        <Route exact path='/' component={Tutorial as any} />
        <Route path='/public' component={Wrapper as any} />
    </Switch>
);
