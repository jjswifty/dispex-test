import {Button, makeStyles} from "@material-ui/core"
import { useState } from "react"
import {Houses} from "../../Houses/Houses"

const useStyles = makeStyles({
    button: {
        margin: 3
    }
})
export const Street = props => {
    const classes = useStyles()
    const street = props.street
    const streetHousesKeys = Object.keys(street.houses)

    const [isStreetOpened, setStreetOpened] = useState(false)

    const openButtonHandler = () => {
        setStreetOpened(!isStreetOpened)
    }
    return (streetHousesKeys.length !== 0 && <div key={street.id}>
        <Button variant="outlined" className={classes.button} onClick={openButtonHandler}>
            {street.name}
        </Button>
        <div>
            { 
                isStreetOpened && <div>
                    <ul>
                        <Houses streetHousesKeys={streetHousesKeys} streetHouses={Object.values(street.houses)}/>
                    </ul>
                </div>
            }
        </div>
    </div>)
}