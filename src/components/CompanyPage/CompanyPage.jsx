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
    if (apartments) {
        const houses = () => {
            console.log('houses work')
            const sortedHouses = []
    
            
                //const housesId = []
                //apartments.forEach(apartment => {
                //    if (!housesId.includes(apartment.houseId)) housesId.push(apartment.houseId)
                //})
    
                const housesWithApartments = {}
    
                apartments.forEach(apartment => {
                    const houseId = apartment.houseId
                    if (housesWithApartments.hasOwnProperty(houseId)) housesWithApartments[houseId].push(apartment)
                    else housesWithApartments[houseId] = [apartment]
                }) 
                console.log(housesWithApartments, 'houses')
            
            //return (
            //    <div>
            //        
            //    </div>
            //)
    
        }
        houses()
    }
    

    // TODO: запилить если нет квартир то показывает что их нет
    return (
        <div className={classes.root}>
            {
                streets && streets.map(street => <div key={street.id}>
                    {   
                        //<div>
                        //    <Button variant="outlined" className={classes.button}>
                        //        {street.name}
                        //    </Button>
                        //    
                        //    {
                        //        apartments.map((apartment, index) => {
                        //            if (apartment.streetId === street.id) return <div key={index}>{apartment.houseId}</div>
                        //        })
                        //    }
                        //</div>
                    }
                </div>)
            }
        </div>
    )
}