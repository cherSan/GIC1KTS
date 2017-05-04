/**
 * Created by achernushevich on 02.05.17.
 */
import * as React from 'react'

interface Props {
    width         : string,
    height        : string,
    direction     : "row" | "row-reverse" | "column" | "column-reverse"
}

export class Layout extends React.Component<Props, undefined> {

    static defaultProps = {
        width         : 'auto',
        height        : '100%',
        direction     : 'row'
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        const {
            width,
            height,
            direction
        } = this.props;

        return (
            <div
                style={{
                    display: 'flex',
                    width: width,
                    height: height,
                    flexDirection: direction,
                    flex: 1
                }}
            >
                {this.props.children}
            </div>
        )
    }
}