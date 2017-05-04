import {connect} from "react-redux";
import {statePageMeta} from "../reducers/Page/Meta";
import {setPageMeta} from "../actions/Page";
/**
 * Created by achernushevich on 02.05.17.
 */

interface trg {
    new (...args:any[]): React.Component<any, any>;
}

interface meta {
    pageName: string
}

interface listeners<T> {
    [key: string]: T;
}

interface actions<T> {
    [key: string]: T;
}


interface attrs {
    listeners?: listeners<any>;
    meta: meta,
    actions?: actions<any>;
    styles?: string;
}

export function Page(attrs: attrs) {
    let classList = {};
    if( attrs.styles ) {
        classList = require(`../${attrs.styles}`);
    }

    const mapStateToProps = (state: any) => {
        let out = {};
        if( attrs.listeners ) {
            Object.keys(attrs.listeners).forEach(function (element: string) {
                if (attrs.listeners && attrs.listeners[element]) {
                    Object.assign(out, attrs.listeners[element](state))
                }
            });
        }

        Object.assign(out, statePageMeta(state))
        return out;
    };

    const actionStateToProps = () => {
        let out = {
            setPageMeta: setPageMeta
        };
        Object.assign(out, attrs.actions)
        return out;
    };

    return ( target: trg ):any => {
        class page extends target {
            classes = classList;
            constructor(props: any) {
                super(props);
                props.setPageMeta(attrs.meta);
            }
        }

        return connect(mapStateToProps, actionStateToProps())(<any>page)
    }

}