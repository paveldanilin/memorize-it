import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Container from './container';
import NotFoundPage from './components/not-found-page/not-found-page';
import Navigation from './components/navigation/navigation';
import IrregularVerbs from './components/irregular-verbs/irregular-verbs';
import PhrasalVerbs from './components/phrasal-verbs/phrasal-verbs';
import PhrasalGrid from "./components/phrasal-grid/phrasal-grid";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Navigation logoText="Memorize-it!"
                            logoLink="/memorize-it"
                            items={[
                                { link: Container.ROUTE_IRREGULAR_VERBS, text: 'Неправильные глаголы' },
                                { link: Container.ROUTE_PHRASAL_VERBS, text: 'Фразовые глаголы' }
                                ]}
                />
                <div className="container">
                    <Switch>
                        <Route exact path="/memorize-it">
                            <IrregularVerbs />
                        </Route>
                        <Route exact path={ Container.ROUTE_IRREGULAR_VERBS }>
                            <IrregularVerbs />
                        </Route>
                        <Route exact path={ Container.ROUTE_PHRASAL_VERBS }>
                            <PhrasalGrid />
                        </Route>
                        <Route path={ Container.ROUTE_PHRASAL_VERBS_EXERCISE } children={ <PhrasalVerbs /> } />
                        <Route>
                            <NotFoundPage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
