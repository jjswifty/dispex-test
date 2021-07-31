import { Button, Card, CardContent, makeStyles, Typography } from "@material-ui/core"
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
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4
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
        clientDeleted ? null : <li className={classes.root}>
            {
                //<div className={classes.card}>
                //    <Typography variant="inherit">{`Жилец ${props.client.name},`}</Typography>
                //    <Typography variant="inherit">{`телефон ${props.client.phone}`}</Typography>
                //    <Button className={classes.btn} onClick={handleDelete} color="secondary" variant="contained">Удалить жильца</Button>
                //</div>
            }
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