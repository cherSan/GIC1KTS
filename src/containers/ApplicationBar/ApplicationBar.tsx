import * as React from "react";
import {Container} from "../../core/decorators/Container";
import {HeaderBar} from "../../components/HeaderBar/HeaderBar";
import {Paper} from "material-ui";
import {WindowIsWideState} from "../../reducers/Window/IsWide";
import {menuOpen} from "../../actions/Menu";
import {ApplicationContainer} from "../../core/ApplicationContainer";

interface Props {
    title: string
}
interface Listeners {
    isWindowWide: boolean,
}
interface Actions {
    menuOpen: () => {}
}

@Container({
    listeners: {
        isWindowWide: WindowIsWideState,
    },
    actions: {
        menuOpen: menuOpen,
    },
})
export class ApplicationBar extends ApplicationContainer<Props, Listeners, Actions, undefined>  {
    constructor(props: any) {
        super(props);
    }

    openMenu = () => {
        this.props.menuOpen()
    };

    render() {
        let showMenuButton = this.props.isWindowWide;
        return (
            <HeaderBar title={this.props.title} showMenuButton={!showMenuButton} buttonClick={this.openMenu}/>
        );
    }
}