/**
 * Created by achernushevich on 05.05.17.
 */
import * as React from 'react'
import {Component} from "../../core/decorators/Component";
import {ApplicationComponent} from "../../core/ApplicationComponent";

import {Card, CardHeader, Avatar, CardContent, Typography, SvgIcon, CardActions, Button, CardMedia, IconButton} from "material-ui"
import Collapse from 'material-ui/transitions/Collapse';
import LabelIcon from "material-ui-icons/LabelOutline"
import ExpandMoreIcon from "material-ui-icons/ExpandMore"
interface Props {

}

@Component({
})
export class CardOrganization extends ApplicationComponent<Props, undefined> {

    constructor(props: any) {
        super(props);
    }
    state = { expanded: false };
    handleExpandClick = () => this.setState({ expanded: !this.state.expanded });

    render() {
        return (
            <Card>
                <CardHeader
                    avatar={<Avatar aria-label="St">S</Avatar>}
                    title="Starbucks"
                    subheader="from bloomberg.com - 3 hours ago"
                />
                <CardMedia>
                    <img src="http://localhost:3001/assets/images/starbucks-news.jpg" alt="Starbucks"
                         style={{
                             maxWidth: '100%'
                         }}
                    />
                </CardMedia>
                <CardContent>
                    <Typography component="p">
                        Starbucks partners with Ford so drivers can order their coffee in-car through Amazon Alexa
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <IconButton
                        onClick={this.handleExpandClick}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                    <CardContent>
                        <Typography component="p">
                            Coffee drinkers will soon be able to place their Starbucks orders within the comfort of their own car after the coffee company announced a partnership with Ford. Ford vehicles equipped with its SYNC3 voice-activated technology, which has Amazon’s voice service incorporated into it, will soon allow drivers to place their orders using the command, “Alexa, ask Starbucks to start my order”.
                        </Typography>
                        <div>
                            <LabelIcon />retail, coffee, food, juice, tea
                        </div>
                    </CardContent>
                </Collapse>
                <CardActions>
                    <Button compact primary>Add</Button>
                    <Button compact primary>4 Comments</Button>
                    <Button compact primary>Share</Button>
                </CardActions>
            </Card>
        );
    }
}