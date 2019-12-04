import React from 'react';
import App from './App';
import {
    BrowserRouter as ReactRouter,
    Switch,
    Route,
} from "react-router-dom";

export default function Router() {
    return (
        <ReactRouter>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/:choices">
                    <h1>Worls</h1>
                </Route>
            </Switch>
        </ReactRouter>
    )
}
