/**
 * Created by achernushevich on 02.05.17.
 */
import * as React from "react";
import {Layout} from "material-ui";

import {UserAuthorizeStatusState} from "../../reducers/User/AuthorizeStatus";
import {Container} from "../../core/decorators/Container";
import {Route, Switch, Redirect} from "react-router-dom";
import {SidePanel} from "../SidePanel/SidePanel";
import {SignIn} from "../SignIn/SignIn";
import {SignUp} from "../SignUp/SignUp";
import {ApplicationContainer} from "../../core/ApplicationContainer";
import {ApplicationBar} from "../ApplicationBar/ApplicationBar";
import {Dashboard} from "../Dashboard/Dashboard";


interface Props {
}
interface Listeners {
    isUserAuthorize: boolean
}
interface Actions {
}

@Container({
    actions: {
    },
    listeners: {
        isUserAuthorize: UserAuthorizeStatusState
    },
    styles: "containers/Wrapper/style.scss"
})
export class Wrapper extends ApplicationContainer<Props, Listeners, Actions, undefined> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let {
            isUserAuthorize,
        } = this.props;
        return (
            <Layout container>
                <SidePanel isUserAuthorize={isUserAuthorize} />
                <Layout item xs={12} className={this.classes.content}>
                    <ApplicationBar title="Sign Up" />
                    <Layout item xs={12} className={this.classes.contentContainer}>
                        <Switch>
                            <Route component={SignIn as any} path="/public/sign-in" />
                            <Route component={SignUp as any} path="/public/sign-up" />
                            <Route component={Dashboard as any} path="/public/dashboard" />
                        </Switch>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}
