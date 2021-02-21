import React, { useEffect, useState } from "react";
import Header from "../Header";
import IdCard from "../IdCard";
import Scanner from "./Scanner";
import { getDataFromApi } from "../../services/api";

import { Route, Switch } from "react-router-dom";
import '../../stylesheets/Home.scss';

const App = () => {

  // states
  const [apiCall, setApiCall] = useState({});

  // api
  useEffect(
    () => {
      getDataFromApi()
        .then((data) => {
          console.log(data);
          setApiCall(data);
        })
        .catch(console.error);
    },
    []
  );

  /*
  // States
  const [api, setApi] = useState([]);
   // API
   useEffect(
    () => {
      Api
        .then((data) => {
          setApi(data);
        })
        .catch(console.error);
    },
    //Empty array so that the first useEffect parameter gets executed only once
    []
  );
  */
 getDataFromApi();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <IdCard />
        </Route>
        <Route path="/scanner" component={Scanner}></Route>
      </Switch>
    </div>
  );
};

export default App;
