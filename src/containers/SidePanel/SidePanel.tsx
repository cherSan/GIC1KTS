/**
 * Created by achernushevich on 02.05.17.
 */

import * as React from 'react'

import {Drawer, Toolbar, Typography} from "material-ui";
import {UnAuthorizeUserMenu} from "../../components/Menus/UnAuthorizeUserMenu";
import {AuthorizeUserMenu} from "../../components/Menus/AuthorizeUserMenu";
import {MenuState} from "../../reducers/Menu/Menu";
import {Container} from "../../core/decorators/Container";
import {menuHide} from "../../actions/Menu";
import {ApplicationContainer} from "../../core/ApplicationContainer";
import {WindowIsWideState} from "../../reducers/Window/IsWide";

interface Props {
    isUserAuthorize: boolean
}
interface Listeners {
    isWindowWide: boolean,
    menuOpened: boolean,
}
interface Actions {
    menuHide: () => {}
}

@Container({
    listeners: {
        isWindowWide: WindowIsWideState,
        menuOpened: MenuState,
    },
    actions: {
        menuHide: menuHide,
    },
    styles: "containers/SidePanel/style.scss"
})
export class SidePanel extends ApplicationContainer<Props, Listeners, Actions, undefined> {

    constructor(props: any) {
        super(props);
    }

    hideMenu = () => {
        this.props.menuHide()
    };

    render() {
        let {
            menuOpened,
            isUserAuthorize,
            isWindowWide
        } = this.props;

        let UserMenu = isUserAuthorize ? AuthorizeUserMenu : UnAuthorizeUserMenu;
        let open = isWindowWide || menuOpened;

        return (
            <Drawer
                open={open}
                docked={isWindowWide}
                leaveTransitionDuration={300}
                enterTransitionDuration={300}
                onRequestClose={this.hideMenu}
                className={this.classes.drawer}
            >
                <div className={this.classes.panel}>
                    <Toolbar style={{background: '#3f51b5'}}>
                        <Typography type="title" colorInherit style={{color: '#fff'}}><b>One</b>Knowledge</Typography>
                    </Toolbar>
                    <UserMenu />
                </div>
            </Drawer>
        );
    }
}