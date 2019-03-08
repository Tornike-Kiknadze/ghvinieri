import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import NewsPage from "./components/newsPage/NewsPage";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/contact/contact";
import ProductPage from "./components/productPage/productpage";
import { IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";

import messages_en from "./translations/en.json";
import messages_ka from "./translations/ka.json";

import locale_en from "react-intl/locale-data/en";
import locale_ka from "react-intl/locale-data/ka";

addLocaleData([...locale_en, ...locale_ka]);

const messages = {
  en: messages_en,
  ka: messages_ka
};

class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "ka"
    };
  }

  handleLanguage = () => {
    const { language } = this.state;
    if (language === "ka") this.setState({ language: "en" });
    else {
      this.setState({ language: "en" });
    }
  };
  handleLangChange = (e) => {
    const lang = e.target.value;
    this.setState({ language: lang });


  };


  render() {
    const { language } = this.state;
    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <App langChange={this.handleLangChange} language={language} handleLanguage={this.handleLanguage} />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/newspage/:id" component={NewsPage} />
            <Route path="/productpage" component={ProductPage} />
          </Switch>
        </Router>
      </IntlProvider>
    );
  }
}

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
