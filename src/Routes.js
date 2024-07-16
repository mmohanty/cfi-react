import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import LoginForm from './components/login/LoginForm';
import AccountForm from './components/accounts/AccountForm';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import history from './components/common/history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                <Route path="/" element={<LoginForm />} />
                <Route path="/account" element={<AccountForm />} />
                </Switch>
            </Router>
        )
    }
}