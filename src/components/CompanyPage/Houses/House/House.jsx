import { useState } from "react"
import { Apartments } from "../../Apartments/Apartments"

export const House = props => {

    const [isOpened, setIsOpened] = useState(false)
    const handleOpen = () => {
        setIsOpened(!isOpened)
    }
    
    return <li>
        <button onClick={handleOpen}>Дом {props.houseNumber}</button>
        {
            isOpened && props.streetHouses.map((apartments, index) => {
                return <Apartments apartments={Object.values(apartments)} key={index}/>
            })
        }
    </li>
}