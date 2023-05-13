import Cards from '../Cards';
import { orderCards, filterCards } from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';

const Favorites = (props) => {
    let dispatch = useDispatch()

    let handleOrderFilter = (event) => {
		if (
			event.target.value === 'Ascendente' ||
			event.target.value === 'Descendente'
		) {
			dispatch(orderCards(event.target.value));
		} else {
			dispatch(filterCards(event.target.value));
		}}
    return(<>
    <div>
        <select name='' onChange={handleOrderFilter}>
            <option selected disabled>
									Choose order
			</option>
            <option value='Ascendente'>Ascending</option>
            <option value='Descendente'>Descending</option>
        </select>
        <select name='' onChange={handleOrderFilter}>
            <option selected disabled>
									Choose filter
			</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Genderless'>Genderless</option>
            <option value='unknown'>Unknown</option>
        </select>
    </div>
        <Cards characters= {props.myFavorites}></Cards>
    </>
    )
}

function mapStateToProps(state) {
   return {myFavorites:state.myFavorites}
}

export default connect(mapStateToProps, null)(Favorites);