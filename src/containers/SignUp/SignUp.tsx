/**
 * Created by achernushevich on 03.05.17.
 */
import * as React from "react";
import {Container} from "../../core/decorators/Container";
import {ApplicationContainer} from "../../core/ApplicationContainer";
import {Paper, TextField, Typography, Card, Button} from "material-ui";

interface Props {}
interface Listeners {}
interface Actions {}

@Container({
    styles: "containers/SignUp/style.scss"
})
export class SignUp extends ApplicationContainer<Props, Listeners, Actions, undefined> {
    constructor(props: any) {
        super(props);
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
                <Button raised primary>Sign Up</Button>
            </Card>
        );
    }
}