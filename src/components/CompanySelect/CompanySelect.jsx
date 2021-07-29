import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCompaniesList, setChosenCompany } from "../../store/reducers/companies-reducer"

export const CompanySelect = props => {
    const dispatch = useDispatch()
    const companiesList = useSelector(state => state.companiesReducer.companies)

    useEffect(() => {
        dispatch(setCompaniesList())
    }, [])

    const optionHandler = id => {
        dispatch(setChosenCompany(id))
    }

    return (
        <div>
            <select autoFocus onChange={e => optionHandler(e.target.value)}>
                {
                    companiesList.map(e => <option value={e.id} key={e.id}>
                        {e.name}
                    </option>
                    )
                }
            </select>
        </div>
    )
}