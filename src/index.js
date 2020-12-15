import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";
import App from "./App";
import About from "./About";

const rootElement = document.getElementById("root");

const Header = () => {
  const location = useLocation();
  const history = useHistory();

  const atAboutPage = location.pathname.includes("/about");

  const handleBack = () => history.goBack();
  return atAboutPage && <button onClick={handleBack}> Back </button>;
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about/:name" component={About} />
      </Switch>
    </Router>
  </React.StrictMode>,
  rootElement
);
