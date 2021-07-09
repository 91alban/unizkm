import React, { Fragment } from 'react';
import { FaGlobe } from "react-icons/fa";
import './YearBar.css';

function YearBar() {
    return (
        <Fragment>
            <div class="container">
                <nav class="nav nav-tabs custom-year-nav">
                    <a href="#" class="nav-item nav-link">
                        <i class="fa fa-home"></i> Viti 1
                    </a>
                    <a href="#" class="nav-item nav-link">
                        <i class="fa fa-user"></i> Viti 2
                    </a>
                    <a href="#" class="nav-item nav-link">
                        <i class="fa fa-envelope"></i> Viti 3
                    </a>
                </nav>
            </div>
        </Fragment>
    )
}

export default YearBar;