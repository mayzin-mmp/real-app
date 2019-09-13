import React,{ Component } from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={'/'}>Issues</Link>
                <button className="navbar-toggler" type="button" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id = "navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/opened'}>Opened</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/closed'}>Closed</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;
