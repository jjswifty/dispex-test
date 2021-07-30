import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import apartmentsReducer, {setListOfApartments, setListOfStreets} from '../../store/reducers/apartments-reducer';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import {setIsCompanySelected} from '../../store/reducers/companies-reducer';
import { Streets } from './Streets/Streets';

const useStyles = makeStyles({
    root: {
        height: '100%',
        maxWidth: '100%',
        paddingLeft: 10
    },
})

export const CompanyPage = props => {
    // вообще компоненты нужно хорошо, даже очень хорошо зарефакторить, 
    // но основная масса писалась ночью, так что и код соответствующий
    const dispatch = useDispatch()
    const classes = useStyles()

    const selectedCompanyId = props.selectedCompany
    const isStreetsFetching = useSelector(state => state.apartmentsReducer.isStreetsFetching)
    const isStreetsFetched = useSelector(state => state.apartmentsReducer.isStreetsFetched)
    const isApartmentsFetching = useSelector(state => state.apartmentsReducer.isApartmentsFetching)
    const apartments = useSelector(state => state.apartmentsReducer.apartments)
    const streets = useSelector(state => state.apartmentsReducer.streets)
    const selectedCompanyName = useSelector(state => state.companiesReducer.selectedCompanyName)

    useEffect(() => {
        console.log(isStreetsFetched)
        if (!isStreetsFetched) {
            dispatch(setListOfStreets())
        }
        dispatch(setListOfApartments(selectedCompanyId))
    }, [])

    if (streets) {
        streets.forEach(street => { // Перебирая все улицы,
            const apartmentsOnThisStreet = apartments.filter(apartment => (apartment.streetId === street.id)) // получаем квартиры, находящиеся на итерируемой улице.
            const housesWithApartments = {} // Создаем объект в котором будут храниться дома с квартирами (номер дома: { квартира, квартира, ... })
            apartmentsOnThisStreet.forEach(apartment => { // Перебирая все квартиры,
                housesWithApartments[apartment.houseId] = {
                    ...housesWithApartments[apartment.houseId],
                    [apartment.addressId]: apartment
                } // создаем дом, добавляем в него итерируемую квартиру / добавляем квартиру в уже существующий дом.
            })
            street['houses'] = housesWithApartments // И наконец добавляем дома на улицу.
        })
    }
    const handleBackButton = () => dispatch(setIsCompanySelected(false))
    const isFetching = (isApartmentsFetching || isStreetsFetching)

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={handleBackButton} disabled={isFetching}>
                Назад к выбору
            </Button>
            <Typography variant="subtitle1">Управляющая компания {selectedCompanyName}</Typography>
            <Typography variant="subtitle2">{selectedCompanyName} имеет дома на данных улицах: (сделано что-бы не показывало все улицы, много пустых)</Typography>
            {isFetching ? <Typography variant="subtitle1">ЗАГРУЗКА...</Typography> : <Streets streets={streets}/>}
        </div>
    )
}