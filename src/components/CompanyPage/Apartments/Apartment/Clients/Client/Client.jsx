import { Button, Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import { useState } from "react"
import { clientService } from "../../../../../../services"

const useStyles = makeStyles({
    root: {
        listStyleType: 'none'
    },
    card: {
        width: 250,
        height: 130,
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    btn: {
        width: '90%',
        fontSize: 12,
        marginTop: 5
    }
})

export const Client = props => {
    const classes = useStyles()
    const [clientDeleted, setClientDeleted] = useState(false)
    const handleDelete = async () => {
        await clientService.deleteClient(props.client.bindId)
        setClientDeleted(true)
    }
    return (
        clientDeleted ? null : <li className={classes.root}
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="inherit">{`Жилец ${props.client.name},`}</Typography>
                    <Typography variant="inherit">{`телефон ${props.client.phone}`}</Typography>
                    <Button className={classes.btn} onClick={handleDelete} color="secondary" variant="contained">Удалить жильца</Button>
                </CardContent>
            </Card>
        </li>
    )
}
