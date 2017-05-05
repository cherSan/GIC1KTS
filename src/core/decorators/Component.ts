/**
 * Created by achernushevich on 02.05.17.
 */
interface trg {
    new (...args:any[]): React.Component<any, any>;
}

interface attrs {
    styles?: string;
}

export function Component(attrs: attrs) {
    let classList = {};
    if( attrs.styles ) {
        classList = require(`../../${attrs.styles}`);
    }

    return ( target: trg ):any => {
        class page extends target {
            classes = classList;
            constructor(props: any) {
                super(props);
            }
        }

        return <any>page
    }

}