import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {setCompaniesList, setChosenCompany} from "../../store/reducers/companies-reducer"
import {makeStyles} from '@material-ui/core/styles';
import {FormControl} from "@material-ui/core";
import {InputLabel} from "@material-ui/core";
import {Select} from "@material-ui/core";
import {MenuItem} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: 0,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formControl: {
        minWidth: 250,
    },
})

export const CompanySelect = props => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const companiesList = useSelector(state => state.companiesReducer.companies)

    useEffect(() => {
        dispatch(setCompaniesList())
    }, [])

    const optionHandler = ({ id, name }) => {
        dispatch(setChosenCompany(id, name))
    }

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel>Управляющая компания</InputLabel>
                <Select onChange={e => optionHandler(e.target.value)} defaultValue="">
                    {
                        companiesList && companiesList.map(e => <MenuItem 
                            value={{id: e.id, name: e.name}} 
                            key={e.id}
                            >
                                {e.name}
                        </MenuItem>)
                    }
                </Select>
            </FormControl>

        </div>
    )
}