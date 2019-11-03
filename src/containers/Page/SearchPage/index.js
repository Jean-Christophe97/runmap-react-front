// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SearchPage from 'src/components/Page/SearchPage';
import {
  submitSearchForm,
  collectCities,
  changePlaces,
  collectPlaces,
  placesWithGeoData,
  changeLatLong,
  collectLatLong,
} from 'src/store/reducer';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  places: state.places,
  numberOfPlaces: state.places.length,
  userSearchInput: state.userSearchInput,
  allPlaces: state.allPlaces,
  latlong: state.latlong,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({

  submitSearchForm: (value) => {
    dispatch(submitSearchForm(value));
  },
  collectCities: () => {
    dispatch(collectCities());
  },
  changePlaces: (value) => {
    dispatch(changePlaces(value));
  },

  collectPlaces: () => {
    dispatch(collectPlaces());
  },

  placesWithGeoData: (places) => {
    dispatch(placesWithGeoData(places));
  },

  changeLatLong: (value) => {
    dispatch(changeLatLong(value));
  },

  collectLatLong: () => {
    dispatch(collectLatLong());
  },
  
});
// Container
const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);

// == Export
export default SearchPageContainer;
