import Header from "./Header";
import IdCard from "./IdCard";
import Scanner from "./Scanner";
import { Route, Switch } from "react-router-dom";
import '../stylesheets/App.scss';

const App = () => {
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
