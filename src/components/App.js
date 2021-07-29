import {useEffect} from "react"
import {useSelector} from "react-redux"
import {CompanyPage} from "./CompanyPage/CompanyPage"
import {CompanySelect} from "./CompanySelect/CompanySelect"
import {makeStyles, ThemeProvider, createTheme} from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";

const theme = createTheme({
    palette: {
        type: 'dark',
    },
    typography: {
        allVariants: {
            color: "white"
        },
    },
});

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: 0,
        width: '100%',
        minHeight: '100vh'
    }
})

export const App = () => {

    const classes = useStyles()

    const isCompanySelected = useSelector(state => state.companiesReducer.isCompanySelected)
    const selectedCompany = useSelector(state => state.companiesReducer.selectedCompany)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                {isCompanySelected
                    ? <CompanyPage selectedCompany={selectedCompany}/>
                    : <CompanySelect/>
                }
            </div>
        </ThemeProvider>

    )
}
