import React, { Fragment } from 'react';
import { FaGlobe } from "react-icons/fa";
import './YearBar.css';

function YearBar() {
    return (
        <Fragment>
            <nav class="navbar navbar-light w-100">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Viti 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Viti 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Viti 3</a>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default YearBar;