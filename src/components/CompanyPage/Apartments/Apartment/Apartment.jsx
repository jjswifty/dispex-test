import { Clients } from "./Clients/Clients"

export const Apartment = props => {
    return (
        <ul>
            Квартира {props.index + 1}
            <Clients apartment={props.apartment}/>
        </ul>
    )
}