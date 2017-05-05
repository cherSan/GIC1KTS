/**
 * Created by achernushevich on 05.05.17.
 */
import * as React from "react";
import {Container} from "../../core/decorators/Container";
import {Layout} from "material-ui";
import {ApplicationContainer} from "../../core/ApplicationContainer";
import {Card} from "../Card/Card";
import update from 'react/lib/update';

interface Props {}
interface Listeners {}
interface Actions {}

interface State {
    cards: Array<CardInterface>
}

interface CardInterface {
    id: number;
    type: string;
}

@Container({
})
export class Dashboard extends ApplicationContainer<Props, Listeners, Actions, undefined> {
    constructor(props: any) {
        super(props);
    }

    render() {

        const cards = [{
            id: 1,
            type: "event"
        }, {
            id: 2,
            type: "organization"
        }, {
            id: 3,
            type: 'profile',
        }];

        return (
            <Layout container
                    gutter={24}
                    align="flex-start"
                    direction="row"
                    justify="space-between"
            >
                {cards.map((card, i) => (
                    <Layout key={i}
                            item
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                    >
                        <Card
                            cardType={card.type}
                        />
                    </Layout>
                ))}
            </Layout>
        );
    }
}