/**
 * Created by achernushevich on 05.05.17.
 */
import * as React from 'react'
import {Card, CardHeader, Avatar, CardContent, Typography, SvgIcon, CardActions, Button} from "material-ui"

import LabelIcon from "material-ui-icons/Label"

import {Component} from "../../core/decorators/Component";
import {ApplicationComponent} from "../../core/ApplicationComponent";

interface Props {

}

@Component({
})
export class CardProfile extends ApplicationComponent<Props, undefined> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    avatar={<Avatar aria-label="LC">LC</Avatar>}
                    title="Luis Cameroon"
                    subheader="posted an article - 17 minutes ago"
                />
                <CardContent>
                    <h2>Progressive Web Apps for a better Mobile User Experience</h2>
                    <Typography component="p">
                        A new methodology called Progressive Web Application is here. It promises to help bridge the gap between performance of Web and Native Apps, and may finally provide the solution for building fast and reliable apps and websites for the mobile age.
                    </Typography>
                    <div>
                        <LabelIcon />cfo, lead, financial, retail
                    </div>
                </CardContent>
                <CardActions>
                    <Button compact primary>Add</Button>
                    <Button compact primary>4 Comments</Button>
                    <Button compact primary>Share</Button>
                </CardActions>
            </Card>
        );
    }
}