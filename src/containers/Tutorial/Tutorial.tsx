import * as React from "react";
import {Container} from "../../core/decorators/Container";
import {Link} from "react-router-dom";
import {ApplicationContainer} from "../../core/ApplicationContainer";
/**
 * Created by achernushevich on 03.05.17.
 */


interface Props {}
interface Listeners {}
interface Actions {}

@Container({
})
export class Tutorial extends ApplicationContainer<Props, Listeners, Actions, undefined> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                Tutorial Container
                <Link to="/public/sign-in">Public</Link>
            </div>
        );
    }
}