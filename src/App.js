import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import HomePage from './components/home-page/HomePage';
import NotFoundPage from "./components/notfound-page/NotFoundPage";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="display-4 text-center">Memorize it!</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <Switch>
                                    <Route exact path="/">
                                        <HomePage />
                                    </Route>
                                    <Route>
                                        <NotFoundPage/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
            </Router>
        );
    }
}
