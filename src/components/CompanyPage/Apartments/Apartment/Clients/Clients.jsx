import { Client } from "./Client/Client"
import { Button, makeStyles, TextField, Typography } from "@material-ui/core"
import { clientService } from "../../../../../services"
import { useState } from "react"

const useStyles = makeStyles({
    clients: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    btn: {
        fontSize: 12,
        margin: 5
    },
    input: {
        width: 140,
        margin: 5
    },

})
export const Clients = props => {
    const classes = useStyles()
    const addedClients = []

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const addClient = async () => {
        console.log(name, phone)
        const client = await clientService.addClient({
            name,
            phone
        })
        addedClients.push({
            bindId: client.id,
            name,
            phone,
        })
    }

    return ( 
        <ul>
            <div >
                <Typography>Жильцы</Typography>
                <div className={classes.clients}>
                    {
                        props.apartment.clients.length > 0 ? props.apartment.clients.map((client, index) => {
                            return <div key={client.bindId}>
                                {
                                    //addedClients.length > 0 && addedClients.map(client => {
                                    //    return <Client client={client} apartment={props.apartment} key={client.bindId}/>
                                    //})
                                    <Client client={client} apartment={props.apartment}/>
                                }
                            </div>
                        }) : <Typography variant="subtitle2">- Жильцов нет</Typography>
                    }
                </div>
            </div>
            <div className={classes.inputs}>
                <TextField className={classes.input} value={name} onInput={e => setName(e.target.value)} placeholder="имя"/>
                <TextField className={classes.input} onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }}
                    } 
                    value={phone} 
                    onInput={e => setPhone(String(e.target.value))} 
                    placeholder="телефон"/>
                <Button onClick={addClient} disabled={!name || !phone} className={classes.btn}>Добавить жильца</Button>
            </div>
        </ul>
    )
}