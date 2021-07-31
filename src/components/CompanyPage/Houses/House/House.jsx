import { useState } from "react"
import { Apartments } from "../../Apartments/Apartments"

export const House = props => {
    //<Apartments />
    const [isOpened, setIsOpened] = useState(false)
    const handleOpen = () => {
        setIsOpened(!isOpened)
    }
    console.log(props)
    return <li>
        <button onClick={handleOpen}>Дом {props.houseNumber}</button>
        {
            isOpened && props.streetHouses.map((apartments, index) => {
                return <Apartments apartments={Object.values(apartments)} key={index}/>
            })
        }

    </li>
}