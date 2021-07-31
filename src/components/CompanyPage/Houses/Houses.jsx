import { House } from "./House/House"

export const Houses = props => {
    return props.streetHousesKeys.map(houseNumber => <House key={houseNumber} houseNumber={houseNumber} streetHouses={props.streetHouses}/>)
}