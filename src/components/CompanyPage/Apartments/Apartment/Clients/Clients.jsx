import { Client } from "./Client/Client"

export const Clients = props => {
    return (
        <ul>
            {
                props.apartment.clients.length > 0 && props.apartment.clients.map(client => {
                    return <Client client={client} key={client.id}/>
                })
            }
        </ul>
    )
}