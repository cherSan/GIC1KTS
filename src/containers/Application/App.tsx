import * as React from "react";

import {Container} from "../../core/decorators/Container";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import {windowCheckWide} from "../../actions/Window";
import {ApplicationContainer} from "../../core/ApplicationContainer";
import {Routes} from "../../routes/Main";
import {MuiThemeProvider} from "material-ui";

interface Props {
    theme: any,
    store: any,
    history: any,
}
interface Listeners {
}
interface Actions {
    windowCheckWide: () => {}
}

@Container({
    actions: {
        windowCheckWide: windowCheckWide
    }
})
export class App extends ApplicationContainer<Props, Listeners, Actions, undefined> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('resize', (ev) => {
            this.props.windowCheckWide()
        })
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={this.props.theme}>
                <Provider store={this.props.store}>
                    <Router history={this.props.history} children={Routes as any} />
                </Provider>
            </MuiThemeProvider>
        );
    }
}