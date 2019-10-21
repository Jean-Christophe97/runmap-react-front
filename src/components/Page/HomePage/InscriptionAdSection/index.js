import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import Steps from 'src/components/Page/HomePage/InscriptionAdSection/Steps/';
import InscriptionLink from 'src/components/Page/HomePage/InscriptionAdSection/InscriptionLink/';

// composant
const InscriptionAdSection = ({  }) => {

  return (
    <>
    <h2>Promotion</h2>
      <Steps />
      <InscriptionLink />
    </>
  )
}

InscriptionAdSection.propTypes = {
  
};

// == Export
export default InscriptionAdSection;
