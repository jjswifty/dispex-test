import { useEffect } from "react"
import { managementCompanyService } from "../services"

export const App = () => {

    useEffect(() => {
        async function fetch () {
            console.log(await managementCompanyService.getManagementCompanies(), 'from component')

        }
        fetch()
    })

    return (
        <div>
            App.
        </div>
    )
}
