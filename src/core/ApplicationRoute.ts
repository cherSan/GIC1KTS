/**
 * Created by achernushevich on 05.05.17.
 */
import * as React from 'react'
import {ApplicationContainer} from "./ApplicationContainer";

export class ApplicationRoute<P, A, L, S> extends ApplicationContainer<P, A, L, S> {
    constructor(props?: P & A & L, context?: any) {
        super(props, context)
    }
}