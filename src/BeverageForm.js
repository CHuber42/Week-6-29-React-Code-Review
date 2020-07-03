import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";

function BeverageForm(props){
  return(
    <React.Fragment>
      <form>
        <p>This is a form.</p>
      </form>
      <hr/>
    </React.Fragment>
  );
}

BeverageForm.propTypes = {
  addABeverage: PropTypes.func  
}


export default BeverageForm;