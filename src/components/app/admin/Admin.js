import * as React from 'react';
import User from '../../../models/user/User';
import { UserContext } from '../../../contexts';

export default class Admin extends React.Component {

    renderAdmin() {
        return (
            <h1>ADMIN</h1>
        );
    }

    isAdmin(user) {
        return user instanceof User && user.hasRole('ADMIN');
    }

    render() {
        return (
            <UserContext.Consumer>
                {user => (
                    (this.isAdmin(user))
                        ? this.renderAdmin()
                        : <b>Access denied</b>
                )}
            </UserContext.Consumer>
        );
    }
}
