import { Street } from "./Street.jsx/Street"

export const Streets = props => {
    return props.streets && props.streets.map(street => {
        return <Street street={street} key={street.id}/>
    })
}