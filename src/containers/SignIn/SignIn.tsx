/**
 * Created by achernushevich on 03.05.17.
 */
import * as React from "react";
import {Container} from "../../core/decorators/Container";
import {Paper, TextField, Typography, Card, Button} from "material-ui";
import {ApplicationContainer} from "../../core/ApplicationContainer";
import {userSetAuthorize} from "../../actions/User";

interface Props {}
interface Listeners {}
interface Actions {
    signIn: () => {}
}

@Container({
    actions: {
        signIn: userSetAuthorize
    },
    styles: "containers/SignIn/style.scss"
})
export class SignIn extends ApplicationContainer<Props, Listeners, Actions, undefined> {
    constructor(props: any) {
        super(props);
    }

    signIn = () => {
        this.props.signIn();
        this.props.history.push('/public/dashboard')
    }

    render() {

        return (
            <Card elevation={4} className={this.classes.card}>
                <TextField
                    label="Login"
                />
                <TextField
                    type="password"
                    label="Password"
                />
                <Button raised primary onClick={this.signIn}>Sign In</Button>
            </Card>
        );
    }
}