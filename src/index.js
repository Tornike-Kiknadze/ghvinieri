import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/contact/contact';
 

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route  path="/contact" component={Contact} />
            


        </div>
    </Router>
)



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
