import { makeStyles } from "@material-ui/core"
import { useState } from "react"
import { clientService } from "../../../../../../services"

const useStyles = makeStyles({
    root: {
        listStyleType: 'none'
    },
    card: {
        width: 200,
        height: 130,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        border: '2px solid black',
        margin: 2,
    }
})

export const Client = props => {
    const classes = useStyles()
    const [clientDeleted, setClientDeleted] = useState(false)
    const handleDelete = () => {
        clientService.deleteClient(props.client.bindId)
        setClientDeleted(true)
    }
    return (
        clientDeleted ? null : <li className={classes.root}>
            <div className={classes.card}>
                <p>{`Жилец ${props.client.name},`}</p>
                <p>{`телефон ${props.client.phone}`}</p>
                <button onClick={handleDelete}>удалить жильца</button>
            </div>
        </li>
    )
}