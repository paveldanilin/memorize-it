import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
// import { isMobile } from "react-device-detect";
// import Fullscreen from "../fullscreen/fullscreen";

const Navigation = ({ logoText, logoLink, items }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
            { /*isMobile ? <Fullscreen requestText="&#x21f1;" exitText="&#x21f2;" /> : null*/ }
            <Navbar.Brand href={ logoLink || '#' }>{ logoText }</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    { items.map( (item) => <Link className="nav-link" key={ item.text } to={ item.link }> { item.text } </Link> ) }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

Navigation.propTypes = {
    logoText: PropTypes.string.isRequired,
    logoLink: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Navigation;
