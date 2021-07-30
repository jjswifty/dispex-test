import { Street } from "./Street.jsx/Street"

export const Streets = props => {
    const streets = props.streets
    return streets && streets.map(street => {
        return <Street street={street} key={street.id}/>
    })
}