/**
 * Created by achernushevich on 02.05.17.
 */
import * as React from 'react'
import {Connect} from "../../decorators/Connect";
import {menu} from './Menu';
import {Link} from "react-router-dom";
import {stateUserAuthorizeStatus} from "../../reducers/User/AuthorizeStatus";
import {MenuItem, Divider, Drawer, AppBar} from "material-ui";


interface Props {
    isUserAuthorize?: boolean,
    hideMenu?: any
}

const mapStateToProps = {
    isUserAuthorize: stateUserAuthorizeStatus
};

@Connect({
    listeners: mapStateToProps,
    // styles: "containers/SidePanel/style.scss"
})
export class SidePanel extends React.Component<Props, undefined> {

    constructor(props: any) {
        super(props);
    }

    generateMenuItem(item: any) {
        switch (item.type) {
            case "title":
                return <MenuItem key={item.key} primaryText={item.primaryText} disabled={true} />
            case "link":
                return (
                    <Link to={item.to} key={item.key}>
                        <MenuItem
                            primaryText={item.primaryText}
                            leftIcon={item.leftIcon}
                        />
                    </Link>
                );
            case "separator":
                return <Divider key={item.key} />
            case "action":
                return (
                    <Link to={item.to} key={item.key}>
                        <MenuItem
                            primaryText={item.primaryText}
                            leftIcon={item.leftIcon}
                        />
                    </Link>
                )
        }
    }

    handleClose = () => {
        this.props.hideMenu()
    };


    render() {
        let {
            isUserAuthorize
        } = this.props;

        let UserMenu = isUserAuthorize ? menu.AuthUser(() => {console.log('logOut')}) : menu.NonAuthUser();
        return (
            <Drawer
                width={270}
                onRequestChange={() => this.handleClose()}
            >
                <AppBar
                    showMenuIconButton={false}
                    title={
                        <div>
                            <img src="https://onekstorage.blob.core.windows.net/ngapp/assets/img/gic_white.png"
                                 style={{
                                     height: '25px'
                                 }}
                            />
                            <span >One</span>
                            <span >Knowledge</span>
                        </div>
                    }
                >
                </AppBar>
                {
                    UserMenu.map(item => {
                        return this.generateMenuItem(item)
                    })
                }
            </Drawer>
        );
    }
}