import { Apartment } from "./Apartment/Apartment"

export const Apartments = props => {
    let index = 0
    return props.apartments.map(apartment => {
        index++
        return <Apartment apartment={apartment} key={apartment.addressId} index={index}/>
    })
}