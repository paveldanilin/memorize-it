import * as React from 'react';
import User from "../models/user/User";
import AuthProvider from '../AuthContext';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: false,
            user: User.create({login: 'Guest', roles: ['GUEST']}),
            accessToken: ''
        };
    }

    login() {
    }

    logout() {
    }

    onAuthentication() {
    }

    render() {
        const uathProviderValue = {
            ...this.state,
            onAuthentication: this.onAuthentication,
            login: this.login,
            logout: this.logout
        };

        return (
            <AuthProvider value={uathProviderValue}>
                {this.props.children}
            </AuthProvider>
        );
    }
}
