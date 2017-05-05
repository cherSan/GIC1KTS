/**
 * Created by achernushevich on 05.05.17.
 */
import * as React from 'react'
import {ApplicationComponent} from "./ApplicationComponent";
import {ReactNode} from "react";

export class ApplicationContainer<P, L, A, S> extends ApplicationComponent<(P & L & A), S> {
    props: Readonly<{ children?: ReactNode }> & Readonly<P & L & A>;
    constructor(props?: (P & L & A), context?: any) {
        super(props, context)
    }
}