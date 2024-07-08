import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PokemonLogo from '../images/pokemon-logo.png';
import '../App.css';


function NavigationBar() {
    return (
        <Navbar>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={PokemonLogo}
                    width="100"
                    className="d-inline-block mx-5"
                />{' '}
            </Navbar.Brand>
            <Form className="d-flex ms-auto mx-5">
                <Form.Control type="text" placeholder="Type a Pokemon..." className="me-2" />
                <Button type="button" className="btn btn-warning">Search!</Button>
            </Form>
        </Navbar>
    );
}
export default NavigationBar;
