/**
 * Created by achernushevich on 02.05.17.
 */
import * as React from "react";
import {setAuthorize} from "../../actions/User";
import {stateUserAuthorizeStatus} from "../../reducers/User/AuthorizeStatus";
import {Page} from "../../decorators/Page";
import {Route, Switch, Redirect} from "react-router-dom";
import {Layout} from "../../components/Layout/Layout";
import {SidePanel} from "../SidePanel/SidePanel";
import {SignIn} from "../SignIn/SignIn";
import {SignUp} from "../SignUp/SignUp";


interface Props {

}

const mapStateToProps = {
    isUserAuthorize: stateUserAuthorizeStatus
};
const mapActionToProps = {
    setAuthorize: setAuthorize
};


@Page({
    meta:{
        pageName: 'Wrapper'
    }
})
export class Wrapper extends React.Component<Props, undefined> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Layout width="100%" height="100%" direction="row">
                <SidePanel />
                <Switch>
                    <Route component={SignIn as any} path="/public/sign-in" />
                    <Route component={SignUp as any} path="/public/sign-pn" />
                </Switch>
            </Layout>
        );
    }
}
