import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setListOfApartments, setListOfStreets} from '../../store/reducers/apartments-reducer';
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

    const selectedCompanyId = props.selectedCompany
    const apartments = useSelector(state => state.apartmentsReducer.apartments)
    const streets = useSelector(state => state.apartmentsReducer.streets)

    useEffect(() => {
        dispatch(setListOfStreets())
        dispatch(setListOfApartments(selectedCompanyId))
    }, [dispatch, selectedCompanyId])

    if (streets) streets.forEach(street => { // Перебирая все улицы,
        const apartmentsOnThisStreet = apartments.filter(apartment => (apartment.streetId === street.id)) // получаем квартиры, находящиеся на итерируемой улице.
        const housesWithApartments = {} // Создаем объект в котором будут храниться дома с квартирами (номер дома: { квартира, квартира, ... })
        apartmentsOnThisStreet.forEach(apartment => { // Перебирая все квартиры,
            housesWithApartments[apartment.houseId] = apartment // создаем дом, или добавляем в уже существующую квартиру.
        })
        street['houses'] = housesWithApartments // И наконец добавляем дома на улицу.
    })

    // TODO: запилить если нет квартир то показывает что их нет
    return (
        <div className={classes.root}>
            {
                
            }
        </div>
    )
}