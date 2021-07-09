import React, { Fragment } from 'react';
import { FaGlobe } from "react-icons/fa";
import './NavigationBar.css';

function NavigationBar() {
    return (
        <Fragment>
            <nav class="navbar navbar-dark custom-navbar w-100">
                <ul class="navbar-nav left-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><h5><b>Sats Moduli</b></h5></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">All university satellites moduli, third party app</a>
                    </li>
                </ul>
                <ul class="nav nav-pills ml-auto right-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Badges</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Attendance</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Didactic Agenda</a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavigationBar;