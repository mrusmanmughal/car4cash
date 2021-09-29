import React from "react";
import Front from "./Front";
import { Switch, Route } from "react-router-dom";
//MultiStep  Form
import Conformationpage from "./Comps/MutiStepForm/Conformationpage";
import VahicleDetails from "./Comps/MutiStepForm/VahicleDetails";
import ContactDetails from "./Comps/MutiStepForm/ContactDetails";
import Valuation from "./Comps/MutiStepForm/Valuation";

// Front Pages
import RetrieveValuation from "./Comps/RetrieveValuation/RetrieveValuation";
import Login from "./Comps/Login/Login";
import ChangeAppointment from "./Comps/ChangeApointment/ChangeAppointment";
import RetriveMessage from "./Comps/RetrieveValuation/RetriveMessage";

// Dashboard Pages

const Routess = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Front} exact />
        <Route path="/confirmVehicle" component={Conformationpage} exact />
        <Route path="/vahicleDetails" component={VahicleDetails} exact />
        <Route path="/contactDetails" component={ContactDetails} exact />
        <Route path="/valuation" component={Valuation} exact />
        <Route path="/retrievevaluation" component={RetrieveValuation} exact />
        <Route path="/changeappointment" component={ChangeAppointment} exact />
        <Route path="/RetriveMessage" component={RetriveMessage} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default Routess;
