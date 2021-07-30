import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import apartmentsReducer, {setListOfApartments, setListOfStreets} from '../../store/reducers/apartments-reducer';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Typography} from '@material-ui/core';
import {setIsCompanySelected} from '../../store/reducers/companies-reducer';

const useStyles = makeStyles({
    root: {
        height: '100%',
        maxWidth: '100%',
        paddingLeft: 10
    },
    button: {
        margin: 3
    }
})

export const CompanyPage = props => {

    const dispatch = useDispatch()
    const classes = useStyles()

    const isFetching = useSelector(state => apartmentsReducer.isFetching)
    const selectedCompanyId = props.selectedCompany
    const apartments = useSelector(state => state.apartmentsReducer.apartments)
    const streets = useSelector(state => state.apartmentsReducer.streets)
    const selectedCompanyName = useSelector(state => state.companiesReducer.selectedCompanyName)

    useEffect(() => {
        dispatch(setListOfStreets())
        dispatch(setListOfApartments(selectedCompanyId))
    }, [])

    if (streets) 
        streets.forEach(street => { // Перебирая все улицы,
            const apartmentsOnThisStreet = apartments.filter(apartment => (apartment.streetId === street.id)) // получаем квартиры, находящиеся на итерируемой улице.
            const housesWithApartments = {} // Создаем объект в котором будут храниться дома с квартирами (номер дома: { квартира, квартира, ... })
            apartmentsOnThisStreet.forEach(apartment => { // Перебирая все квартиры,
                housesWithApartments[apartment.houseId] = {
                    ...housesWithApartments[apartment.houseId],
                    [apartment.addressId]: apartment
                } // создаем дом, добавляем в него итерируемую квартиру / добавляем в уже существующий.
            })
            street['houses'] = housesWithApartments // И наконец добавляем дома на улицу.
        })
        //if (streets) console.log(streets)
    
    const handleBackButton = () => dispatch(setIsCompanySelected(false))

    //const [isStreetOpened, setIsStreetOpened] = useState(false)

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" onClick={handleBackButton}>
                Назад к выбору
            </Button>
            <Typography variant="subtitle1">{selectedCompanyName}</Typography>
            <Typography variant="subtitle2">Управляющая компания имеет дома на данных улицах: (сделано что-бы не показывало все дома, много пустых)</Typography>
            {
                isFetching ? <div>
                    {streets && streets.map(street => {
                    const streetHousesKeys = Object.keys(street.houses)
                    return (streetHousesKeys.length !== 0 && <div key={street.id}>
                        <Button variant="outlined" className={classes.button}>
                            {street.name}
                        </Button>
                        <div>
                        {
                            streetHousesKeys.map((key, index) => {
                                //console.log(street)
                                return (
                                    <div key>
                                        <ul>
                                            {streetHousesKeys.map(houseNumber => <div key={houseNumber}>Дом {houseNumber}</div>)}
                                            <div>
                                                {Object
                                                    .values(street.houses)
                                                    .map((apartments, index) => {
                                                        return Object.values(apartments).map((apartment, index) => <ul>
                                                            Квартира {index + 1}
                                                            <ul>
                                                                {apartment.clients.length > 0 && apartment
                                                                    .clients
                                                                    .map(client => {
                                                                        console.log(client)
                                                                        return <li>
                                                                            {`Жилец ${client.name}, телефон ${client.phone}.`}
                                                                        </li>
                                                                    })}
                                                            </ul>
                                                        </ul>)
                                                    })
                                                }
                                            </div>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>)
                    })
                    }
                </div> : 'загрузка...'
            }
            
        </div>
    )
}