import { Apartment } from "./Apartment/Apartment"

export const Apartments = props => {
    return props.apartments.map((apartment, index) => {
        return <Apartment index={index} apartment={apartment} key={apartment.addressId}/>
    })
}