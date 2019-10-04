import * as React from 'react';
import {Link} from "react-router-dom";
import User from '../../../models/user/User';
import { UserContext } from '../../../contexts';

export default class Navigation extends React.Component {
    render() {
        return (
                <nav className="row navbar navbar-expand-sm bg-dark navbar-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">
                                <span className="nav-link">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">
                                <span className="nav-link">About</span>
                            </Link>
                        </li>
                        <li className="nav-item float-right">
                            <UserContext.Consumer>
                                {user => (
                                        (user instanceof User)
                                            ? <span className="text-info">{user.getLogin()}</span>
                                            : <button className="btn btn-sm btn-outline-secondary">Login</button>
                                )}
                            </UserContext.Consumer>
                        </li>
                    </ul>
                </nav>

        );
    }
}
