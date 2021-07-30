import {Button, makeStyles} from "@material-ui/core"
import {Apartments} from "../../Apartments/Apartments"
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

    return (streetHousesKeys.length !== 0 && <div key={street.id}>
        <Button variant="outlined" className={classes.button}>
            {street.name}
        </Button>
        <div>
            {streetHousesKeys.map((key, index) => {
                return <div key={key}>
                    <ul>
                        <Houses streetHousesKeys={streetHousesKeys}/>
                        <div>
                            {Object.values(street.houses).map((apartments, index) => {
                                    return <Apartments apartments={Object.values(apartments)} key={index}/>
                                })
                            }
                        </div>
                    </ul>
                </div>})
            }
        </div>
    </div>)
}