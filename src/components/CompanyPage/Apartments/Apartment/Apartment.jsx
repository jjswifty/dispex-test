import { useState } from "react"
import { Clients } from "./Clients/Clients"

export const Apartment = props => {

    const [isOpened, setIsOpened] = useState(false)
    const handleOpen = () => {
        setIsOpened(!isOpened)
    }

    return (
        <ul>
            <button onClick={handleOpen}>Квартира с ID {props.apartment.addressId}</button>
            {isOpened && <Clients apartment={props.apartment}/>}
        </ul>
    )
}