/**
 * Created by achernushevich on 03.05.17.
 */
import * as React from "react";
import {setAuthorize} from "../../actions/User";
import {stateUserAuthorizeStatus} from "../../reducers/User/AuthorizeStatus";
import {Page} from "../../decorators/Page";

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
        pageName: 'Sign In'
    }
})
export class SignIn extends React.Component<Props, undefined> {
    constructor(props: any) {
        super(props);
    }

    componentWillLeave(){
        console.log(123)
    }

    render() {
        return (
            <div>
                SignIn
            </div>
        );
    }
}