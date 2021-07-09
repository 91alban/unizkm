import React, { Fragment } from 'react';
import { FaGlobe } from "react-icons/fa";
import './Header.css';
import logo from './logo-fzkm.png';
import avatar from './avatar.jpg';

function Header() {
    return (
        <Fragment>
            <nav class="navbar navbar-dark navbar-expand-sm custom-navbar w-100">
                <a class="navbar-brand" href="#">
                    <img src={logo} class="custom-logo" alt="headerlogo"/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">English <FaGlobe /> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Hi, Hegi</a>
                    </li>
                    <li class="nav-item">
                        <img src={avatar} class="navbar-brand custom-avatar" alt="headerlogo" />
                    </li>
                </ul>
                </div>
            </nav>
           {/* <nav class="navbar navbar-expand-md custom-navbar navbar-dark">
                <img src={logo} class="navbar-brand custom-logo" alt="headerlogo" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link navbar-right" href="#">English <FaGlobe /> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link navbar-right" href="#">Hi, Hegi</a>
                            </li>
                            <li class="nav-item">
                                <img src={avatar} class="navbar-brand custom-avatar navbar-right" alt="headerlogo" />
                            </li>
                        </ul>
                  
            </nav> */}
        </Fragment>
    )
}

export default Header;