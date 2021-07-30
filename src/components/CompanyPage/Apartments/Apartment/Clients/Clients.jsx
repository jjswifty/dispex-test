import { Client } from "./Client/Client"
import { makeStyles } from "@material-ui/core"
import { clientService } from "../../../../../services"
import { useState } from "react"

const useStyles = makeStyles({
    clients: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})
export const Clients = props => {
    const classes = useStyles()
    
    return (
        <ul>
            <div className={classes.clients}>
                {
                    props.apartment.clients.length > 0 && props.apartment.clients.map(client => {
                        return <Client client={client} key={client.id}/>
                    })
                }
            </div>
            <button>Добавить жильца</button>
        </ul>
    )
}