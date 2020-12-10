import React from 'react'
import {Link} from "react-router-dom";
import './header.css'
const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg">
                <Link to="/" className="navbar-brand">Dubai Cafe</Link>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer;