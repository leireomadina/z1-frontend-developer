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
  const [imgSrc, setImgSrc] = useState(null);

  const openScanner = useEffect(() => {
    getDataFromApi()
      .then((data) => {
        setApiCall(data);
      })
      .catch(console.error);
  }, [setApiCall]);

  const handleScanner = (imageSrc: string) => {
    setImgSrc(imageSrc);
  }
  
  return (
    <div className="home">
      <Switch>
        <Route exact path="/">
          <Header />
          <IdCard openScanner={openScanner} />
        </Route>
        <Route path="/scanner">
          <Scanner handleScanner={handleScanner} imgSrc={imgSrc} setImgSrc={setImgSrc} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
