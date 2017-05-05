/**
 * Created by achernushevich on 05.05.17.
 */
import * as React from 'react'
import {Styles} from "./interfaces/Styles";

export class ApplicationComponent<P, S> extends React.Component<P, S> {
    classes: Styles = {};

    constructor(props?: P, context?: any) {
        super(props, context)
    }
}