import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './components/home/Home';
import NotFound from "./components/notfound/NotFound";

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
                                        <Home />
                                    </Route>
                                    <Route>
                                        <NotFound/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
            </Router>
        );
    }
}
