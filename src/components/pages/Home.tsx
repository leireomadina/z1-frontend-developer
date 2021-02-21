import React, { useEffect, useState } from "react";
import Header from "../Header";
import IdCard from "../IdCard";
import Scanner from "./Scanner";
import { getDataFromApi } from "../../services/api";

import { Route, Switch } from "react-router-dom";
import "../../stylesheets/Home.scss";
import { isPropertySignature } from "typescript";

const App = () => {
  // states
  const [apiCall, setApiCall] = useState({});
  const [scannerSuccess, SetScannerSuccess] = useState(false);

  // api
  useEffect(() => {
    getDataFromApi()
      .then((data) => {
        // console.log(data);
        setApiCall(data);
      })
      .catch(console.error);
  }, []);

  const handleScanner = (): void => {
    console.log("Activado :)");
  };

  return (
    <div className="home">
      <Switch>
        <Route exact path="/">
          <Header />
          <IdCard handleScanner={handleScanner}/>
        </Route>
        <Route path="/scanner">
          <Scanner title="Holi"/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
