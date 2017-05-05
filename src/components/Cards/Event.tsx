/**
 * Created by achernushevich on 05.05.17.
 */
import * as React from 'react'
import {Card, CardHeader, Avatar, CardContent, Typography, SvgIcon, CardActions, Button, CardMedia, List, ListItem, ListItemText} from "material-ui"

import {Component} from "../../core/decorators/Component";
import {ApplicationComponent} from "../../core/ApplicationComponent";
import FolderIcon from "material-ui-icons/Folder"
interface Props {

}

@Component({
})
export class CardEvent extends ApplicationComponent<Props, undefined> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    avatar={<Avatar aria-label="Recipe">EV</Avatar>}
                    title="Upcoming Events"
                />
                <CardContent>
                    <List>
                        <ListItem button>
                            <Avatar><FolderIcon /></Avatar>
                            <ListItemText primary="11:00 am - Starbucks meeting" secondary="3 North Buona Vista Drive, Singapore" />
                        </ListItem>
                    </List>
                </CardContent>
                <CardActions>
                    <Button compact primary>Today's event</Button>
                    <Button compact primary>See all</Button>
                </CardActions>
            </Card>
        );
    }
}