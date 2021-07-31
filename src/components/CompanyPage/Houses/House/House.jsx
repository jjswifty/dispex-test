import { Button } from "@material-ui/core"
import { useState } from "react"
import { Apartments } from "../../Apartments/Apartments"

export const House = props => {

    const [isOpened, setIsOpened] = useState(false)
    const handleOpen = () => {
        setIsOpened(!isOpened)
    }
    
    return <li>
        <Button size="medium" variant="outlined" onClick={handleOpen} style={{margin: '2px'}}>Дом {props.houseNumber}</Button>
        {
            isOpened && props.streetHouses.map((apartments, index) => {
                return <Apartments apartments={Object.values(apartments)} key={index}/>
            })
        }
    </li>
}