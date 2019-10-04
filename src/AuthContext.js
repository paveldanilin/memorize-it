import * as React from "react";
import User from './models/user/User';

const UserContext = React.createContext({
    authenticated: false,
    user: User.create({login: 'Guest', roles: ['GUEST']}),
    accessToken: '',
    login: () => {},
    onAuthentication: () => {},
    logout: () => {}
});

export const AuthProvider = UserContext.Provider;
export const AuthConsumer = UserContext.Consumer;
