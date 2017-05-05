/**
 * Created by achernushevich on 05.05.17.
 */
import * as React from "react";
import {Container} from "../../core/decorators/Container";
import {Layout} from "material-ui";
import {ApplicationContainer} from "../../core/ApplicationContainer";
import {CardEvent} from "../../components/Cards/Event";
import {CardProfile} from "../../components/Cards/Profile";
import {CardOrganization} from "../../components/Cards/Organization";

interface Props {
    cardType: "event" | "profile" | "organization"
}
interface Listeners {}
interface Actions {}

@Container({
})
export class Card extends ApplicationContainer<Props, Listeners, Actions, undefined> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let Crd: any = null;
        switch (this.props.cardType) {
            case "event":
                Crd = CardEvent;
                break;
            case "profile":
                Crd = CardProfile;
                break;
            case "organization":
                Crd = CardOrganization;
                break;
            default:
                Crd = '';
                break;
        }
        console.log(Crd);
        return (
            <Crd />
        );
    }
}