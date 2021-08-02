import { Button } from "@material-ui/core"
import { useState } from "react"
import { Clients } from "./Clients/Clients"

export const Apartment = props => {

    const [isOpened, setIsOpened] = useState(false)
    const handleOpen = () => {
        setIsOpened(!isOpened)
    }

    return (
        <ul>
            <Button size="small" variant="outlined" style={{margin: '2px'}} onClick={handleOpen}>Квартира {props.index}</Button>
            {isOpened && <Clients apartment={props.apartment}/>}
        </ul>
    )
}