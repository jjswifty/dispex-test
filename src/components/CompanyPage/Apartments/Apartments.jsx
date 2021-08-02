import { Apartment } from "./Apartment/Apartment"

export const Apartments = props => {
    return props.apartments.map(apartment => {
        return <Apartment apartment={apartment} key={apartment.addressId}/>
    })
}