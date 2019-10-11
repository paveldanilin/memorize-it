import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import APP_ROUTES from "./routes";
import NotFoundPage from "./components/notfound-page/NotFoundPage";
import Navigation from './components/navigation/Navigation';
import IrregularVerbs from "./components/irregular-verbs/irregular-verbs";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Navigation logoText="Memorize-it!"
                            logoLink="/"
                            items={[
                                { link: APP_ROUTES.IRREGULAR_VERBS, text: 'Неправильные глаголы' },
                                { link: APP_ROUTES.PHRASAL_VERBS, text: 'Фразовые глаголы' }
                                ]}
                />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Redirect to={{ pathname: APP_ROUTES.IRREGULAR_VERBS }} />
                        </Route>
                        <Route exact path={ APP_ROUTES.IRREGULAR_VERBS }>
                            <IrregularVerbs />
                        </Route>
                        <Route exact path={ APP_ROUTES.PHRASAL_VERBS }>
                            <span>Phrasal verbs</span>
                        </Route>
                        <Route>
                            <NotFoundPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
