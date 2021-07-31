import { useState } from "react"
import { Clients } from "./Clients/Clients"

export const Apartment = props => {
    console.log(props.apartment)
    const [isOpened, setIsOpened] = useState(false)
    const handleOpen = () => {
        setIsOpened(!isOpened)
    }
    return (
        <ul>
            <button onClick={handleOpen}>Квартира {props.index + 1}</button>
            {isOpened && <Clients apartment={props.apartment}/>}
        </ul>
    )
}