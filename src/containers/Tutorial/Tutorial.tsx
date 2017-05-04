import * as React from "react";
import {Page} from "../../decorators/Page";
import {Link} from "react-router-dom";
/**
 * Created by achernushevich on 03.05.17.
 */


interface Props {

}

@Page({
    meta: {
        pageName: 'Tutorial'
    }
})
export class Tutorial extends React.Component<Props, undefined> {
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