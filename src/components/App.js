import { useEffect } from "react"
import { useSelector } from "react-redux"
import { CompanySelect } from "./CompanySelect/CompanySelect"

export const App = () => {

    let isCompanySelected = useSelector(state => state.companiesReducer.isCompanySelected)

    return (
        <div>
            {
                isCompanySelected ? 'Streets and houses' : <CompanySelect />
            }
        </div>
    )
}
