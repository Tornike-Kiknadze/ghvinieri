import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import NewsPage from "./components/newsPage/NewsPage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/contact/contact";
import ProductPage from "./components/productPage/productpage";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/newspage/:id" component={NewsPage} />
      <Route path="/productpage" component={ProductPage} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
