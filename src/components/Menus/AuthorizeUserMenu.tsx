/**
 * Created by achernushevich on 04.05.17.
 */
import * as React from 'react'
import {ListItem, ListItemText, ListItemIcon, Layout, Divider} from "material-ui";

import PersonIcon from 'material-ui-icons/Person';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import BuildIcon from 'material-ui-icons/Build';

import {ApplicationComponent} from "../../core/ApplicationComponent";
import {Component} from "../../core/decorators/Component";
import {Link} from "react-router-dom";

interface Props {
}

@Component({

})
export class AuthorizeUserMenu extends ApplicationComponent<Props, undefined> {

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <Layout>
                <ListItem>
                    <ListItemText secondary="My Knowledge" />
                </ListItem>
                <Link to="/public/sign-in">
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </Link>
            </Layout>
        );
    }
}