import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.heading}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.changeT} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className={`form-check-label text-${props.theme==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault">Enable Dark theme</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar