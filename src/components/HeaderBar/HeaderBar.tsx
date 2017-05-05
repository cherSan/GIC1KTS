/**
 * Created by achernushevich on 04.05.17.
 */
import * as React from 'react'
import {AppBar, Toolbar, Typography, Button} from "material-ui"

import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import {Component} from "../../core/decorators/Component";
import {ApplicationComponent} from "../../core/ApplicationComponent";

interface Props {
    title: string,
    showMenuButton: boolean,
    buttonClick: any
}

@Component({
    styles: 'components/HeaderBar/styles.scss'
})
export class HeaderBar extends ApplicationComponent<Props, undefined> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <AppBar className={this.classes.applicationBar}>
                <Toolbar >
                    {
                        this.props.showMenuButton ?
                            (
                                <IconButton contrast onClick={this.props.buttonClick}>
                                    <MenuIcon />
                                </IconButton>
                            ) : ''
                    }

                    <Typography type="title" colorInherit>{this.props.title}</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}