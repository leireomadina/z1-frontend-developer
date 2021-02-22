import React, { useEffect, useState } from "react";
import Header from "../Header";
import IdCard from "../IdCard";
import Scanner from "./Scanner";
import { getDataFromApi } from "../../services/api";
import { Redirect, Route, Switch } from "react-router-dom";
import "../../stylesheets/Home.scss";

const App = () => {
  // states
  const [imgSrc, setImgSrc] = useState<string>(null);
  const [isValid, setIsValid] = useState<boolean>(false);

  const openScanner = useEffect(() => {
    getDataFromApi()
      .then((data) => {
        console.log(data);
        if (data === "Approved") {
          setIsValid(true);
        } else if (data === "Too Much Glare") {
          setIsValid(false);
        }
      })
      .catch(console.error);
  }, []);
  
  const handleScanner = (imageSrc: string) => {
    setImgSrc(imageSrc);
  };

  return (
    <div className="home">
      <Switch>
        <Route exact path="/">
          <Header />
          <IdCard openScanner={openScanner} handleScanner={handleScanner} imageSrc={imgSrc}/>
        </Route>
        <Route >
          {imgSrc ? <Redirect to="/"/> : <Scanner handleScanner={handleScanner} imgSrc={imgSrc} setImgSrc={setImgSrc} />}    
        </Route>
      </Switch>
    </div>
  );
};

export default App;
