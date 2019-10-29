import axios from 'axios';

import { SUBMIT_SEARCH_FORM, COLLECT_CITIES, changeSuggestions, changePlaces } from 'src/store/reducer';
import { baseUri, searchRoute, citiesSearchRoute } from 'src/store/vars_route';

const searchMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le searchMiddleware, et je laisse passer cette action: ', action);
  next(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case SUBMIT_SEARCH_FORM: {
      const state = store.getState();
      const searchedCity = state.userSearchInput;

      console.log('La ville qui est envoyé dans la requête ', searchedCity);

      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      axios.get(`${baseUri}${searchRoute}${searchedCity}`)
        .then((response) => {
          console.log(`La liste des lieux à ${searchedCity} : `, response.data);
          console.log('Le type de la réponse : ', typeof response.data);
          // si ça ne trouve pas la ville : "Cette ville n'existe pas ou ne contient auccun lieu référencé à l'intérieur"
          // faire une action différente. if response.data === object  action A, si response.data === string action B
          // la console (ou javascript) reconnait le tableau comme un object quand des lieux existe.
          // la console reconnait qu'il s'agit d'un string quand il n'y a pas de lieu
          const actionCollectPlaces = changePlaces(response.data);
          store.dispatch(actionCollectPlaces);
        })
        .catch((error) => {
          console.log('Apparement ça marche pas', error);
        })
        .finally(() => {
        });
      break;
    }
    case COLLECT_CITIES: {
      console.log('Requete envoyée pour récuperer la liste des villes');

      // cf doc axios sur son fonctionnement https://github.com/axios/axios
      axios.get(`${baseUri}${citiesSearchRoute}`)
        .then((response) => {
          console.log('La liste des villes présente dans la BDD : ', response.data);
          // TODO: demander au back que cela arrive sous forme de tableau si possible.
          const actionCollectCitiesList = changeSuggestions(response.data);
          store.dispatch(actionCollectCitiesList);
        })
        .catch((error) => {
          console.log('Apparement ça marche pas');
        })
        .finally(() => {
        });
    }
  }
};

export default searchMiddleware;
