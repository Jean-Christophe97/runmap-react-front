// == Import : npm
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


// == Import : local
import HomePage from 'src/components/Page/HomePage';
import UserPage from 'src/components/Page/UserPage';
import SearchPage from 'src/containers/Page/SearchPage';
import InscriptionPage from 'src/containers/Page/InscriptionPage';
import ContactPage from 'src/components/Page/ContactPage';
import AddPlacePage from 'src/containers/Page/AddPlacePage';
import AProposPage from 'src/components/Page/AProposPage';
import AdminPage from 'src/components/Page/AdminPage';


// == Composant
const Page = ({
  searchFormData,
  setSearchFormData,
}) => (
  <>
    <Switch>
      <Route path="/" exact>
        <HomePage
          searchFormData={searchFormData}
          setSearchFormData={setSearchFormData}
        />
      </Route>

      <Route path="/inscription" exact>
        <InscriptionPage />
      </Route>

      <Route path="/search" exact>
        <SearchPage
          searchFormData={searchFormData}
          setSearchFormData={setSearchFormData}
        />
      </Route>
      <Route path="/user" exact>
        <UserPage />
      </Route>

      <Route path="/contact" exact>
        <ContactPage />
      </Route>

      <Route path="/ajouter" exact>
        <AddPlacePage />
      </Route>
  
      <Route path="/apropos" exact> {/* Page avec nos photo (l'idée de Kevin) */}
        <AProposPage />
      </Route>

      <Route path="/admin" exact>
        <AdminPage />
      </Route>


    </Switch>
  </>
);

// == Export
export default withRouter(Page);
