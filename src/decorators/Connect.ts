import {connect} from "react-redux";
/**
 * Created by achernushevich on 02.05.17.
 */
interface trg {
    new (...args:any[]): React.Component<any, undefined>;
}

interface listeners<T> {
    [key: string]: T;
}

interface actions<T> {
    [key: string]: T;
}

interface attrs {
    listeners?: listeners<any>;
    actions?: actions<any>;
    styles?: string;
}

export function Connect(attrs: attrs) {
    let classList = {};
    if( attrs.styles ) {
        classList = require(`../${attrs.styles}`);
    }

    const mapStateToProps = (state: any) => {
        let out = {};
        if( attrs.listeners ) {
            Object.keys(attrs.listeners).forEach(function (element: string) {
                if(attrs.listeners && attrs.listeners[element]) {
                    Object.assign(out, attrs.listeners[element](state))
                }
            });
        }

        return out;
    };

    const actionStateToProps = () => {
        let out = {};
        Object.assign(out, attrs.actions);
        return out;
    };

    return (target: trg) => {
        class page extends target {
            classes = classList;
            constructor(props: any) {
                super(props);
            }
        }

        return <any>connect(mapStateToProps, actionStateToProps())(page)
    }

}