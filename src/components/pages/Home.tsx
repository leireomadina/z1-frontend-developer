import React, { useEffect, useState } from "react";
import Header from "../Header";
import IdCard from "../IdCard";
import Scanner from "./Scanner";
import { getDataFromApi } from "../../services/api";

import { Route, Switch } from "react-router-dom";
import "../../stylesheets/Home.scss";

const App = () => {
  // states

  const [apiCall, setApiCall] = useState({});
  const [image, setImage] = useState("");

  // // api
  // useEffect(() => {
  //   getDataFromApi()
  //     .then((data) => {
  //       setApiCall(data);
  //     })
  //     .catch(console.error);
  // }, []);

  const handleScanner = useEffect(() => {
    console.log("Activado :)");
    getDataFromApi()
      .then((data) => {
        setApiCall(data);
      })
      .catch(console.error);
  }, [setApiCall]);
  
  return (
    <div className="home">
      <Switch>
        <Route exact path="/">
          <Header />
          <IdCard handleScanner={handleScanner} />
        </Route>
        <Route path="/scanner">
          <Scanner/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
