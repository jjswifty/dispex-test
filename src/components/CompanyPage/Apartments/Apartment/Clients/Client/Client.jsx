export const Client = props => {
    return (
        <li>
            {`Жилец ${props.client.name}, телефон ${props.client.phone}`}
        </li>
    )
}