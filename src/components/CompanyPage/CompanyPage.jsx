import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setListOfHouses, setListOfStreets} from '../../store/reducers/apartments-reducer';
import {makeStyles} from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        height: '100%',
        maxWidth: '100%',
        paddingLeft: 10
    },
    button: {
        margin: 3
    },
})

export const CompanyPage = props => {

    const dispatch = useDispatch()
    const classes = useStyles()

    const selectedCompany = props.selectedCompany
    const houses = useSelector(state => state.apartmentsReducer.houses)
    const streets = useSelector(state => state.apartmentsReducer.streets)

    useEffect(() => {
        dispatch(setListOfStreets())
        dispatch(setListOfHouses(selectedCompany))
    }, [])

    return (
        <div className={classes.root}>
            {
                streets && streets.map(street => <div key={street.id}>
                    {
                        <Button variant="outlined" className={classes.button}>
                            {street.name}
                        </Button>
                    }
                </div>)
            }
        </div>
    )
}