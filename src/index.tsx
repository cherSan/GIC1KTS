import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {storeConfig} from "./config/Store";
import {Router} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import {MuiThemeProvider} from "material-ui/styles";
import {blue600, blue900, darkBlack, fullBlack, white} from "material-ui/styles/colors";
import {Routes} from "./routes/Main"
import {AppBar} from "material-ui";
import {getMuiTheme} from "material-ui/styles/getMuiTheme";

console.log(123);

export class Application {
    private static instance: Application;
    static history: any;
    private store: any;
    private theme: any;

    private constructor() {
        Application.history = createBrowserHistory();
        this.store = storeConfig();
        // this.theme = getMuiTheme();
    }

    static getInstance = () => {
        if (!Application.instance) {
            Application.instance = new Application();
        }
        return Application.instance;
    };

    init = () => {
        ReactDOM.render(
            <MuiThemeProvider muiTheme={this.theme}>
                <AppBar
                    showMenuIconButton={false}
                    title="test"
                >
                </AppBar>
                {/*<Provider store={this.store}>*/}
                    {/*<Router history={Application.history} children={Routes as any} />*/}
                {/*</Provider>*/}
            </MuiThemeProvider>,
            document.getElementById("application")
        );
    }
}

setTimeout(() => {
    let app = Application.getInstance();
    app.init();
}, 1000)


