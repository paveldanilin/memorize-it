import * as React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Navigation from "./components/app/navigation/Navigation";
import Home from './components/app/home/Home';
import About from './components/app/about/About';
import NotFound from "./components/app/notfound/NotFound";

import User from './models/user/User';

import { UserContext } from './contexts';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({user: User.create({login: 'Guest', roles: ['ADMIN']})});
        }, 1000);
    }

    render() {
        return (
            <Router>
                <UserContext.Provider value={this.state.user}>
                    <div className="container">
                        <Navigation />
                        <div className="row">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route>
                                    <NotFound/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </UserContext.Provider>
            </Router>
        );
    }
}
