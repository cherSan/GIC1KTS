import * as React from "react";
import * as ReactDOM from "react-dom";
import {storeConfig} from "./config/Store";


import createBrowserHistory from "history/createBrowserHistory";
import {App} from "./containers/Application/App";



export class Application {
    private static instance: Application;
    private history: any;
    private store: any;
    private theme: any;

    private constructor() {
        this.history = createBrowserHistory();
        this.store = storeConfig();
    }

    static getInstance = () => {
        if (!Application.instance) {
            Application.instance = new Application();
        }
        return Application.instance;
    };

    init = () => {
        ReactDOM.render(
            <App history={this.history} store={this.store} theme={this.theme} />, document.getElementById("application")
        );
    }
}

const application = Application.getInstance();
application.init();
